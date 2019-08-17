import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
import ControlPanelButton from '../control-panel-button/control-panel-button';

import './control-panel.scss';

type TProps = {

}

type TPS = TProps & {
    flexItemsVariousHeight: boolean;
    flexContainerFixedHeight: boolean;
    action: ActionFunction;
}

class ControlPanel extends React.PureComponent<TPS> {

    addFlexItems = (count: number) => {
        this.props.action(actionsHandler, 'addFlexItems', { count });
    }

    switchFlexItemsVariousHeight = () => {
        this.props.action(actionsHandler, 'switchFlexItemsVariousHeight', {});
    }

    switchFlexContainerFixedHeight = () => {
        this.props.action(actionsHandler, 'switchFlexContainerFixedHeight', {});
    }

    clearFlexItemsChanges = () => {
        this.props.action(actionsHandler, 'clearFlexItemsChanges', {});
    }

    render = () => {

        return (
            <div className="flexbox-helper__control-panel">
                <ControlPanelButton value="+1" onClick={() => this.addFlexItems(1)} />
                <ControlPanelButton value="-1" onClick={() => this.addFlexItems(-1)} />
                <ControlPanelButton value="+10" onClick={() => this.addFlexItems(10)} />
                <ControlPanelButton value="-10" onClick={() => this.addFlexItems(-10)} />
                <ControlPanelButton value={"Различная высота элементов" + (this.props.flexItemsVariousHeight ? " (on)" : "(off)")} onClick={() => this.switchFlexItemsVariousHeight()} />
                <ControlPanelButton value={"Высота контейнера 1000px" + (this.props.flexContainerFixedHeight ? " (on)" : "(off)")} onClick={() => this.switchFlexContainerFixedHeight()} />
                <ControlPanelButton value="Отменить" onClick={() => this.clearFlexItemsChanges()} />
            </div>
        )

    }

}

const mapStateToProps = (state: TState, props: TProps) => {
    return {
        flexItemsVariousHeight: state.flexItemsVariousHeight,
        flexContainerFixedHeight: state.flexContainerFixedHeight,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: TProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);