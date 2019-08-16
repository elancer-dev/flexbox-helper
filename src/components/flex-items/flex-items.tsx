import React from 'react';

type TProps = {
    count: number;
    variousHeight: boolean;
}

class FlexItems extends React.PureComponent<TProps> {

    render = () => {

        var flexItemsArray = [];

        for (var i = 1; i <= this.props.count; i++) {
            flexItemsArray.push(
                <div key={i} className="flexbox-helper__flex-item" style={this.props.variousHeight ? { paddingBottom: ((i + 2) % 3) * 20 + 'px' } : {}}>{i}</div>
            );
        }

        return flexItemsArray;

    }

}

export default FlexItems;