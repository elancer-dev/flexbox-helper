import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction, TStyles, TFlexContainer, TFlexItem } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
import Helper from '../../lib/helper';
// import RunningLabel from './../running-label/running-label';
// import './control-panel.scss';

import Hint from '../hint/hint';

type TProps = {
    default?: boolean;
    hintMessage?: string;
    paramTag: keyof TStyles;
    paramName: string;
    paramValue: string;
    paramCurrentValue: string;
}

type TPS = TProps & {
    // paramOption: string;
    action: ActionFunction;
}

class ParamOption extends React.PureComponent<TPS> {

    // constructor(props: TPS) {
    //     super(props);
    // }

    componentDidMount = () => {
        // console.log(this.props.paramOption);
    }

    clickHandler = () => {
        this.props.action(actionsHandler, 'setStyle', { paramTag: this.props.paramTag, paramName: this.props.paramName, paramValue: this.props.paramValue });
    }

    render = () => {

        var classList = 'flexbox-helper__param-option';
        classList += this.props.paramValue === this.props.paramCurrentValue ? ' flexbox-helper__param-option_current' : '';
        classList += this.props.default ? ' flexbox-helper__param-option_default' : '';

        var option = <div className={classList} onClick={this.clickHandler}>{this.props.paramValue}</div>

        if (this.props.hintMessage && this.props.hintMessage.length) {
            return (
                <Hint message={this.props.hintMessage}>{option}</Hint>
            )
        } else {
            return (
                <Fragment>{option}</Fragment>
            )
        }

    }

}

const mapStateToProps = (state: TState, props: TProps) => {
    return {
        // paramOption: state.styles[props.paramTag][props.paramName]
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: TProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ParamOption);
// export default connect(() => { }, mapDispatchToProps)(ParamOption);