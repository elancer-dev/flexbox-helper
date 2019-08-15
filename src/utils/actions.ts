import { TState, TAction, TStyles } from './types';
// import Helper from '../lib/helper';

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

        }

        return newState;

    },


}

export const action = <H extends object, T extends keyof H, D>(h: H, t: T, d: D): TAction<H, D> => {
    return { type: t, data: d, handler: h }
}