
export type TFlexContainer = {
    display: 'flex' | 'inline-flex';
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
};

export type TFlexItem = {
    // alignSelf: string;
    // order: string;
    flexGrow: string;
    flexShrink: string;
    flexBasis: 'auto' | 'content' | string;
}

export type TStyles = {
    flexContainer: TFlexContainer;
    flexItem: TFlexItem;
};

export type TState = {
    styles: TStyles;
    flexItemsCount: number;
    flexItemsVariousHeight: boolean;
    flexContainerFixedHeight: boolean;
}

export type TAction<H extends object, D> = {
    handler: H;
    type: keyof H;
    data: D;
}

export type DataArgumentType<F> = F extends (s: TState, d: infer D) => TState ? D : never;

export type ActionFunction = <H extends object, T extends keyof H>(handler: H, type: T, data: DataArgumentType<H[T]>) => TAction<H, DataArgumentType<H[T]>>;