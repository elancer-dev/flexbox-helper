import { TState, TAction } from './types';

const initialState: TState = {
    styles: {
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },
        flexItem: {
            // order: 0,
            flexGrow: '0',
            flexShrink: '1',
            flexBasis: 'auto',
        },
    }
}

export function reducer(state: TState = initialState, action: TAction<any, any>): TState {

    if (action.handler !== undefined && typeof action.handler[action.type] === 'function') {
        return action.handler[action.type](state, action.data);
    } else {
        return state;
    }

}