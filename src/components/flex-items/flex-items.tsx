import React from 'react';
import FlexItem from './snippets/flex-item/flex-item';

type TProps = {
    count: number;
    variousHeight: boolean;
}

class FlexItems extends React.PureComponent<TProps> {

    render = () => {

        var flexItemsArray = [];

        for (var i = 1; i <= this.props.count; i++) {
            flexItemsArray.push(
                <FlexItem key={i} index={i} height={this.props.variousHeight ? ((i + 2) % 3) * 30 : undefined} />
            );
        }

        return flexItemsArray;

    }

}

export default FlexItems;