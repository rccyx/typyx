alias t:= test
alias l:= lint
alias b:= build
alias f:= format


@build:
    pnpm build 

@test:
    pnpm test

@lint:
    pnpm lint

@format:
    pnpm format
@tt:
    pnpm lint:ts