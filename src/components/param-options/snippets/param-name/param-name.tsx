import React from 'react';
import Hint from './../../../hint/hint';

type TProps = {
    hintMessage: string;
}

class ParamName extends React.PureComponent<TProps> {

    render = () => {

        var param = <div className="flexbox-helper__param-name">{this.props.children}</div>;

        if (this.props.hintMessage.length) {
            return (
                <Hint message={this.props.hintMessage}>
                    {param}
                </Hint>
            )
        } else {
            return param;
        }

    }

}

export default ParamName;