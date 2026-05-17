import { Prune, IfEquals, NotIncluded, Maybe, TestType } from 'src';
import { test, expect } from 'vitest';

export enum OrderStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  RETURNED = 'RETURNED',
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
  CREDITS = 'CREDITS',
}

export enum UserActionType {
  PLACE_ORDER = 'PLACE_ORDER',
  CANCEL_ORDER = 'CANCEL_ORDER',
  RETURN_ORDER = 'RETURN_ORDER',
  RATE_PRODUCT = 'RATE_PRODUCT',
  WRITE_REVIEW = 'WRITE_REVIEW',
}

export enum ProductType {
  DIGITAL = 'DIGITAL',
  PHYSICAL = 'PHYSICAL',
}

interface ShippingDetails {
  address: string;
  city: string;
  postalCode: string;
  country: string;
  deliveryDate: Maybe<string>;
}

type ProductPricing<T extends ProductType> = {
  basePrice: number;
  discount: number;
  finalPrice: number;
  inCountryDiscount: IfEquals<T, ProductType.PHYSICAL, number, NotIncluded>;
};

type ProductDetails<T extends ProductType> = {
  type: T;
  productId: string;
  productName: string;
  quantity: number;
  pricing: ProductPricing<T>;
  physicalDescription: IfEquals<
    T,
    ProductType.DIGITAL,
    {
      color: string;
      size: string;
    },
    NotIncluded
  >;
};

type PaymentBreakdown = {
  baseAmount: number;
  tax: number;
  discount: number;
  finalAmount: number;
};

interface PaymentDetails<PM extends PaymentMethod> {
  method: PM;
  transactionId: Maybe<string>;
  amountPaid: number;
  breakdown: IfEquals<PM, PaymentMethod.CREDITS, string, PaymentBreakdown>;
}

type UserOrderDetails<
  OS extends OrderStatus,
  UAT extends UserActionType,
  PT extends ProductType,
  PM extends PaymentMethod,
> = {
  orderId: string;
  userId: string;
  products: ProductDetails<PT>[];
  orderStatus: OS;
  shipping: IfEquals<
    PT,
    ProductType.PHYSICAL,
    {
      details: IfEquals<
        OS,
        OrderStatus.SHIPPED | OrderStatus.DELIVERED,
        ShippingDetails,
        NotIncluded
      >;
      deliveredOn: IfEquals<OS, OrderStatus.DELIVERED, Date, NotIncluded>;
      returnedOn: IfEquals<OS, OrderStatus.RETURNED, Date, NotIncluded>;
    },
    NotIncluded
  >;
  payment: PaymentDetails<PM>;
  actions: {
    type: UAT;
    timestamp: number;
    metadata: IfEquals<
      UAT,
      | UserActionType.PLACE_ORDER
      | UserActionType.CANCEL_ORDER
      | UserActionType.RETURN_ORDER,
      {
        ipAddress: string;
        deviceType: string;
      },
      NotIncluded
    >;
  }[];
};

test('_', () => {
  type OrderData = Prune<
    UserOrderDetails<
      OrderStatus.DELIVERED,
      UserActionType.PLACE_ORDER,
      ProductType.PHYSICAL,
      PaymentMethod.PAYPAL
    >
  >;
  const testOrderData: OrderData = {
    orderStatus: OrderStatus.DELIVERED,
    actions: [
      {
        timestamp: 1663725600000,
        // Type 'UserActionType.RATE_PRODUCT' is not assignable to type 'UserActionType.PLACE_ORDER'.ts(2322)
        type: UserActionType.PLACE_ORDER,
        // Object literal may only specify known properties, and 'metadata' does not exist in type 'OmitExactlyByTypeDeep<{ type: UserActionType.PLACE_ORDER; timestamp: number; metadata: NotIncluded; }, NotIncluded>'.ts(2353)
        // metadata: {
        //   ipAddress: '127.0.0.1',
        //   deviceType: 'desktop',
        // },
      },
    ],
    orderId: '123',
    userId: 'abc',
    products: [
      {
        // Type 'ProdcutType.DIGITAL' is not assignable to type 'ProdcutType.PHYSICAL'.ts(2322)
        // type: ProductType.DIGITAL,
        type: ProductType.PHYSICAL,
        productId: 'abc',
        productName: 'Test Product',
        quantity: 1,
        pricing: {
          basePrice: 10,
          discount: 0,
          finalPrice: 10,
          // If the product type is digital, the 'physicalDescription' property should be omitted
          // Object literal may only specify known properties, and 'inCountryDiscount' does not exist in type 'OmitExactlyByTypeDeep<ProductPricing<ProductType.DIGITAL>, NotIncluded>'.ts(2353)
          // physicalDescription: {
          //   color: 'Red',
          //   size: 'Large',
          // },
          inCountryDiscount: 87,
        },
      },
    ],
    payment: {
      amountPaid: 10,
      // If the PaymentMethod is CREDITS, the 'breakdown' property should be a string, no Breakdown object should exist
      // Type '{ baseAmount: number; tax: number; discount: number; finalAmount: number; }' is not assignable to type 'string'.
      breakdown: {
        baseAmount: 10,
        tax: 2,
        discount: 0,
        finalAmount: 12,
      },
      // Type 'PaymentMethod.BANK_TRANSFER' is not assignable to type 'PaymentMethod.PAYPAL'.ts(2322)
      // method: PaymentMethod.BANK_TRANSFER,
      method: PaymentMethod.PAYPAL,
      transactionId: '1234567890',
    },
    shipping: {
      deliveredOn: new Date(),
    },
  };

  const result: TestType<OrderData, typeof testOrderData, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  type JobConfig<Env, Iso, Sched> = {
    execution: IfEquals<
      Env,
      'wasm',
      {
        memoryPages: number;
        importedModules: string[];
      },
      IfEquals<
        Env,
        'container',
        {
          image: string;
          runtime: 'runc' | 'gvisor';
        },
        NotIncluded
      >
    >;

    isolation: IfEquals<
      Iso,
      'none',
      NotIncluded,
      {
        quota: IfEquals<
          Iso,
          'cgroup',
          {
            cpuShares: number;
            memoryLimitBytes: number;
          },
          NotIncluded
        >;
      }
    >;

    schedule: IfEquals<
      Sched,
      'cron',
      {
        expression: string;
        timezone: string;
      },
      IfEquals<
        Sched,
        'immediate',
        {
          priority: number;
        },
        NotIncluded
      >
    >;
  };

  // 3. Compute the pruned type
  type WasmCronNoIsolation = Prune<JobConfig<'wasm', 'none', 'cron'>>;
  // 4. Declare the exact variable shape matching the post's expected output
  const testJobData: WasmCronNoIsolation = {
    execution: {
      importedModules: ['env', 'wasi_snapshot_preview1'],
      memoryPages: 2,
    },
    schedule: {
      expression: '0 0 * * *',
      timezone: 'UTC',
    },
    // TS will throw an error because 'isolation' has been completely pruned out.
    // @ts-expect-error <-- Object literal may only specify known properties
    isolation: 'none', //
  };

  const result: TestType<WasmCronNoIsolation, typeof testJobData, true> = true;
  expect(result).toBe(true);
});
