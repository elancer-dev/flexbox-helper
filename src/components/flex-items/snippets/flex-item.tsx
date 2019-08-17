import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction, TFlexItem } from './../../../utils/types';
import { action, actionsHandler } from './../../../utils/actions';
import ControlPanelCheckbox from '../../control-panel-checkbox/control-panel-checkbox';
import Counter from './../../ui/counter/counter';
import Select from './../../ui/select/select';

import './flex-item.scss';

type TReactState = {
    useGeneralFlexItemStyles: boolean;
    flexItem: {
        alignSelf: string;//'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
        order: string,
        flexGrow: string,
        flexShrink: string,
        flexBasis: 'auto' | 'content' | string,
    }
}

type TProps = {
    index: number;
    height?: number;
}

type TPS = TProps & {
    flexItem: TFlexItem;
    action: ActionFunction;
}

class FlexItem extends React.Component<TPS, TReactState> {

    // private useGeneralFlexItemStyles: boolean;

    constructor(props: TPS) {

        super(props);

        // this.useGeneralFlexItemStyles = true;

        this.state = {
            useGeneralFlexItemStyles: true,
            flexItem: {
                alignSelf: 'auto',
                order: '0',
                flexGrow: this.props.flexItem.flexGrow,
                flexShrink: this.props.flexItem.flexShrink,
                flexBasis: this.props.flexItem.flexBasis,
            },
        }

    }

    useGeneralFlexItemStylesCheckboxHandler = (checked: boolean) => {
        this.setState({ useGeneralFlexItemStyles: checked });
    }

    counterChangeHandler = (c: string, param: 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis') => {

        var newState = {
            useGeneralFlexItemStyles: false,
            flexItem: {
                alignSelf: this.state.flexItem.alignSelf,
                order: this.state.flexItem.order,
                flexGrow: this.state.flexItem.flexGrow,
                flexShrink: this.state.flexItem.flexShrink,
                flexBasis: this.state.flexItem.flexBasis,
            }
        };

        newState.flexItem[param] = c;

        this.setState(newState);

    }

    alignSelfSelectChangeHandler = (item: string) => {
        this.setState(
            {
                useGeneralFlexItemStyles: false,
                flexItem: {
                    alignSelf: item,
                    order: this.state.flexItem.order,
                    flexGrow: this.state.flexItem.flexGrow,
                    flexShrink: this.state.flexItem.flexShrink,
                    flexBasis: this.state.flexItem.flexBasis,
                }
            }
        );
    }

    flexBasisSelectChangeHandler = (item: string) => {
        console.log('final', item);

        this.setState(
            {
                useGeneralFlexItemStyles: false,
                flexItem: {
                    alignSelf: this.state.flexItem.alignSelf,
                    order: this.state.flexItem.order,
                    flexGrow: this.state.flexItem.flexGrow,
                    flexShrink: this.state.flexItem.flexShrink,
                    flexBasis: item,
                }
            }
        );
    }

    render = () => {

        var styles = this.props.height ? { paddingBottom: this.props.height + 'px' } : {};

        styles = Object.assign({}, styles, this.state.useGeneralFlexItemStyles ? this.props.flexItem : this.state.flexItem);

        return (
            <div className="flex-item" style={styles}>
                <div className="flex-item__index">{this.props.index}</div>
                <div><ControlPanelCheckbox title=".flex-item" checked={this.state.useGeneralFlexItemStyles} onClick={this.useGeneralFlexItemStylesCheckboxHandler} /></div>
                <div className="flex-item__text flex-item__text_center">или</div>
                <div><Counter title="order:" min={-99} max={99} count={0} onChange={(c) => { this.counterChangeHandler(c.toString(), 'order') }} /></div>
                <div><Select title="align-self:" list={['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']} onChange={(item) => { this.alignSelfSelectChangeHandler(item) }} /></div>
                <div><Counter title="flex-grow:" min={-99} max={99} count={0} onChange={(c) => { this.counterChangeHandler(c.toString(), 'flexGrow') }} /></div>
                <div><Counter title="flex-shrink:" min={-99} max={99} count={1} onChange={(c) => { this.counterChangeHandler(c.toString(), 'flexShrink') }} /></div>
                <div>
                    <Select title="flex-basis:" list={[
                        'auto', 'content', <Counter title="" min={0} step={100} count={0} postfix="px" onChange={(c) => { this.flexBasisSelectChangeHandler(c.toString() + 'px') }} />
                    ]} onChange={(item) => { this.flexBasisSelectChangeHandler(item) }} />
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state: TState, props: TProps) => {
    return {
        flexItem: state.styles.flexItem,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: TProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlexItem);