import React, { Fragment } from 'react';
import './hint.scss';

type TProps = {
    message: string;
}

type TReactState = {
    visible: boolean
}

type EnrichedChildren = {
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    children?: React.ReactNode
}

class Hint extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = { visible: false };
    }

    mouseEnterHandler = () => {
        this.setState({ visible: true });
    }

    mouseLeaveHandler = () => {
        this.setState({ visible: false });
    }

    getHintInner = (children: React.ReactNode) => {
        return (
            <Fragment>
                {children}
                <div className="flexbox-helper__hint" style={{ display: this.state.visible ? 'block' : 'none' }}>
                    <div className="flexbox-helper__hint-arrow"></div>
                    {this.props.message}
                </div>
            </Fragment>
        )
    }

    enrichElements = (children: React.ReactNode): any => {

        return React.Children.map(children, child => {

            if (!React.isValidElement<EnrichedChildren>(child)) {
                return child;
            }

            var childInner = child.props.children ? child.props.children : '';

            return React.Children.map(this.props.children, child => {

                return React.cloneElement((child as React.ReactElement<EnrichedChildren>), {
                    onMouseEnter: this.mouseEnterHandler,
                    onMouseLeave: this.mouseLeaveHandler,
                }, this.getHintInner(childInner));

            });

        });

    }

    render = () => this.enrichElements(this.props.children)

}

export default Hint;