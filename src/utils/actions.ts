import { TState, TAction, TStyles } from './types';

export const actionsHandler = {

    setStyle: (state: TState, data: { paramTag: keyof TStyles; paramName: string; paramValue: string; }): TState => {

        var newState = { ...state };
        newState.styles = { ...state.styles };

        if (data.paramTag === 'flexContainer') {

            newState.styles.flexContainer = Object.assign({}, newState.styles.flexContainer,
                {
                    [data.paramName]: data.paramValue
                }
            );

        } else if (data.paramTag === 'flexItem') {
            newState.styles.flexItem = Object.assign({}, newState.styles.flexItem,
                {
                    [data.paramName]: data.paramValue
                }
            );
        }

        return newState;

    },

    addFlexItems: (state: TState, data: { count: number }): TState => {

        var newState = { ...state };

        newState.flexItemsCount += data.count;

        if (newState.flexItemsCount < 0) {
            newState.flexItemsCount = 0;
        }

        return newState;

    },

    switchFlexItemsVariousHeight: (state: TState, data: {}): TState => {

        var newState = { ...state };

        newState.flexItemsVariousHeight = !newState.flexItemsVariousHeight;

        return newState;

    },

    switchFlexContainerFixedHeight: (state: TState, data: {}): TState => {

        var newState = { ...state };

        newState.flexContainerFixedHeight = !newState.flexContainerFixedHeight;

        return newState;

    },

    clearFlexItemsChanges: (state: TState, data: {}): TState => {

        var newState = { ...state };

        newState.flexItemsCount = 3;
        newState.flexItemsVariousHeight = false;
        newState.flexContainerFixedHeight = false;

        return newState;

    },

}

export const action = <H extends object, T extends keyof H, D>(h: H, t: T, d: D): TAction<H, D> => {
    return { type: t, data: d, handler: h }
}