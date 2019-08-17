import React from 'react';
import './control-panel-button.scss';

type TProps = {
    value: string;
    onClick?: any;
}

class ControlPanelButton extends React.PureComponent<TProps> {

    render = () => {

        return (
            <div className="control-panel-button" onClick={this.props.onClick}>{this.props.value}</div>
        )

    }

}

export default ControlPanelButton;