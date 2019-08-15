import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IState, ActionFunction } from '../../utils/types';
import { action } from '../../utils/actions';
import { runningLabelActionsHandler } from './actions';
import './running-label.scss';

interface IProps { }

interface IPS extends IProps, IState {
    timerInterval: number;
    label: string;
    action: ActionFunction;
}

class RunningLabel extends React.PureComponent<IPS> {

    private timerID?: number;
    private timeOut: number = 0;

    constructor(props: IPS) {
        super(props);
        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.timerID = window.setInterval(this.start, 100);
    }

    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }

    start() {
        if (this.props.timerInterval > 0 && this.timeOut > this.props.timerInterval) {
            this.timeOut = 0;
            this.props.action(runningLabelActionsHandler, 'shiftLabel', {});
        } else {
            this.timeOut++;
        }
    }

    render() {

        return (
            <div className="running-label">
                <span>{this.props.label}</span>
            </div>
        )

    }

}

const mapStateToProps = (state: IState, props: IProps) => {
    return {
        timerInterval: state.timerInterval,
        label: state.label,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: IProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RunningLabel);