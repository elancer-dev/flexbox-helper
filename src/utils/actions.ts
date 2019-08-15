import { TState, TAction, TStyles, TFlexContainer, TFlexItem } from './types';
// import Helper from '../lib/helper';

export const actionsHandler = {

    setStyle: (state: TState, data: { paramTag: string; paramName: string; paramValue: string; }): TState => {

        var newState = { ...state };
        newState.styles = { ...state.styles };

        newState.styles = Object.assign(newState.styles, {
            [data.paramTag]: {
                [data.paramName]: data.paramValue
            }
        });

        return newState;

    },


}

export const action = <H extends object, T extends keyof H, D>(h: H, t: T, d: D): TAction<H, D> => {
    return { type: t, data: d, handler: h }
}