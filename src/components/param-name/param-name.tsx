import React from 'react';
import Hint from '../hint/hint';

type TProps = {
    hintMessage: string;
}

class ParamName extends React.PureComponent<TProps> {

    render = () => {

        return (

            <Hint message={this.props.hintMessage}>
                <div className="flexbox-helper__param-name">{this.props.children}</div>
            </Hint>

        )

    }

}

export default ParamName;