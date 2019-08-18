import React from 'react';
import './button.scss';

type TProps = {
    value: string;
    onClick?: any;
}

class Button extends React.PureComponent<TProps> {

    render = () => {

        return (
            <div className="button" onClick={this.props.onClick}>{this.props.value}</div>
        )

    }

}

export default Button;