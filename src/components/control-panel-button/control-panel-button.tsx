import React from 'react';

type TProps = {
    value: string;
    onClick?: any;
}

class ControlPanelButton extends React.PureComponent<TProps> {

    render = () => {

        return (
            <div className="flexbox-helper__control-panel-button" onClick={this.props.onClick}>{this.props.value}</div>
        )

    }

}

export default ControlPanelButton;