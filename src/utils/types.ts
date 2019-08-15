export type TState = {
    styles: {
        flexContainer: {
            display: string;
            flexDirection: string;
            flexWrap: string;
        };
    };
}

export type TAction<H extends object, D> = {
    handler: H;
    type: keyof H;
    data: D;
}

export type DataArgumentType<F> = F extends (s: TState, d: infer D) => TState ? D : never;

export type ActionFunction = <H extends object, T extends keyof H>(handler: H, type: T, data: DataArgumentType<H[T]>) => TAction<H, DataArgumentType<H[T]>>;