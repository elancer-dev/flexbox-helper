import React from 'react';
import Helper from '../../lib/helper';
import './control-panel-checkbox.scss';

type TProps = {
    title: string;
    checked?: boolean;
    onClick?: (checked: boolean) => any;
}

type TReactState = {
    checked: boolean
}

class ControlPanelCheckbox extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            checked: this.props.checked === undefined ? true : this.props.checked
        };
    }

    componentDidUpdate() {
        if (this.props.checked !== undefined) {
            this.setState({ checked: this.props.checked });
        }
    }

    clickHandler = () => {
        var checked = !this.state.checked;
        this.setState({ checked });

        if (Helper.isSet(this.props.onClick)) {
            this.props.onClick(checked);
        }
    }

    render = () => {

        return (
            <div className="control-panel-checkbox">
                <div className="control-panel-checkbox__checkbox-container" onClick={this.clickHandler}>
                    <div className={"control-panel-checkbox__checkbox-tick" + (this.state.checked ? '_checked' : '_unchecked')}></div>
                </div>
                <div className="control-panel-checkbox__checkbox-title">{this.props.title}</div>
            </div>
        )

    }

}

export default ControlPanelCheckbox;