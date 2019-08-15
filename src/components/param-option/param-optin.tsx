import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
import Helper from '../../lib/helper';
// import RunningLabel from './../running-label/running-label';
// import './control-panel.scss';

import Hint from '../hint/hint';

type TProps = {
    hintMessage?: string;
    paramTag: keyof TState;
    paramName: string;
    paramValue: string;
}

type TPS = TProps & {
    paramOption: string;
    action: ActionFunction;
}

class ParamOption extends React.PureComponent<TPS> {

    // constructor(props: TPS) {
    //     super(props);
    // }   

    render() {

        if (this.props.hintMessage) {
            return (
                <Hint message={this.props.hintMessage}>
                    <div className="flexbox-helper__param-option flexbox-helper__param-option_current">{this.props.children}</div>
                </Hint>
            )
        } else {
            return (
                <div className="flexbox-helper__param-option flexbox-helper__param-option_current">{this.props.children}</div>
            )
        }

    }

}

const mapStateToProps = (state: TState, props: TProps) => {
    return { paramOption: state[props.paramTag][props.paramName] };
};

const mapDispatchToProps = (dispatch: Dispatch, props: TProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ParamOption);