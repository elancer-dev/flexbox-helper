import React, { Fragment } from 'react';
import './hint.scss';

type TProps = {
    message: string;
}

type TState = {
    visible: boolean
}

type EnrichedChildren = {
    onMouseEnter: (e: MouseEvent) => void,
    onMouseLeave: (e: MouseEvent) => void,
    children?: React.ReactNode
}

class Hint extends React.PureComponent<TProps, TState> {

    constructor(props: TProps) {
        super(props);
        this.state = { visible: false };
    }

    mouseEnterHandler = (e: MouseEvent) => {
        e.stopPropagation();
        this.setState({ visible: true });
    }

    mouseLeaveHandler = (e: MouseEvent) => {
        e.stopPropagation();
        this.setState({ visible: false });
    }

    getHint = (children: React.ReactNode) => {
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

    enrichRadioElements = (children: React.ReactNode): any => {

        return React.Children.map(children, child => {

            if (!React.isValidElement<EnrichedChildren>(child)) {
                return child;
            }

            var inner = child.props.children ? child.props.children : '';

            return React.Children.map(this.props.children, child => {

                return React.cloneElement((child as React.ReactElement<EnrichedChildren>), {
                    onMouseEnter: this.mouseEnterHandler,
                    onMouseLeave: this.mouseLeaveHandler,
                }, this.getHint(inner));

            });

        });

    }

    render = () => {

        var childrenWithProps = this.enrichRadioElements(this.props.children);



        return (

            <Fragment>
                {childrenWithProps}
            </Fragment>

        )

    }

}

export default Hint;