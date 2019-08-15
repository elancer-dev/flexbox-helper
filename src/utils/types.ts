
export type TFlexContainer = {
    display: 'flex' | 'inline-flex';
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type TFlexItem = {
    align: string;
}

export type TStyles = {
    flexContainer: TFlexContainer;
    flexItem: TFlexItem;
};

export type TState = {
    styles: TStyles;
}

export type TAction<H extends object, D> = {
    handler: H;
    type: keyof H;
    data: D;
}

export type DataArgumentType<F> = F extends (s: TState, d: infer D) => TState ? D : never;

export type ActionFunction = <H extends object, T extends keyof H>(handler: H, type: T, data: DataArgumentType<H[T]>) => TAction<H, DataArgumentType<H[T]>>;