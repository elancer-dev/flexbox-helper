import React from 'react';
import Helper from './../../../lib/helper';
import './counter.scss';

type TProps = {
    title: string;
    count?: number;
    min?: number;
    max?: number;
    step?: number;
    postfix?: string;
    onChange?: (count: number) => any;
}

type TReactState = {
    count: number;
}

class Counter extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            count: Helper.isSet(this.props.count) ? this.props.count : 0
        }
    }

    count = (c: number) => {

        var count = this.state.count + c;

        if (Helper.isSet(this.props.min) && (count < this.props.min)) {
            count = this.props.min;
        } else if (Helper.isSet(this.props.max) && (count > this.props.max)) {
            count = this.props.max;
        }

        if (Helper.isSet(this.props.onChange)) {
            this.props.onChange(count);
        }

        this.setState({ count });

    }

    render = () => {

        return (
            <div className="ui-counter">
                <div>{this.props.title}</div>
                <div className="ui-counter__box">
                    <div className="ui-counter__dec-button" onClick={(e) => { this.count(-1 * (Helper.isSet(this.props.step) ? this.props.step : 1)); e.stopPropagation(); }}>-</div>
                    <div className="ui-counter__count">{this.state.count}{Helper.isSet(this.props.postfix) ? this.props.postfix : ''}</div>
                    <div className="ui-counter__inc-button" onClick={(e) => { this.count(1 * (Helper.isSet(this.props.step) ? this.props.step : 1)); e.stopPropagation(); }}>+</div>
                </div>
            </div>
        )

    }

}

export default Counter;