import React from 'react';
import ControlPanelCheckbox from '../control-panel-checkbox/control-panel-checkbox';

type TProps = {
    count: number;
    variousHeight: boolean;
}

class FlexItems extends React.PureComponent<TProps> {

    render = () => {

        var flexItemsArray = [];

        for (var i = 1; i <= this.props.count; i++) {
            flexItemsArray.push(
                <div key={i} className="flexbox-helper__flex-item" style={this.props.variousHeight ? { paddingBottom: ((i + 2) % 3) * 20 + 'px' } : {}}>
                    <div>{i}</div>
                    <div><ControlPanelCheckbox title=".flex-item" /></div>
                    <div>alignSelf</div>
                    <div>order</div>
                    <div>flexGrow</div>
                    <div>flexShrink</div>
                    <div>flexBasis</div>
                </div>
            );
        }

        return flexItemsArray;

    }

}

export default FlexItems;