import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction, TFlexItem } from './../../../../utils/types';
import { action } from './../../../../utils/actions';
import Checkbox from './../../../ui/checkbox/checkbox';
import Counter from './../../../ui/counter/counter';
import Select from './../../../ui/select/select';

import './flex-item.scss';

type TReactState = {
    useGeneralFlexItemStyles: boolean;
    alignSelf: string;
    order: string,
    flexGrow: string,
    flexShrink: string,
    flexBasis: 'auto' | 'content' | string,
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

    constructor(props: TPS) {

        super(props);

        this.state = {
            useGeneralFlexItemStyles: true,
            alignSelf: 'auto',
            order: '0',
            flexGrow: this.props.flexItem.flexGrow,
            flexShrink: this.props.flexItem.flexShrink,
            flexBasis: this.props.flexItem.flexBasis,
        }

    }

    getStyles = () => {
        return {
            alignSelf: this.state.alignSelf,
            order: this.state.order,
            flexGrow: this.state.flexGrow,
            flexShrink: this.state.flexShrink,
            flexBasis: this.state.flexBasis,
        }
    }

    useGeneralFlexItemStylesCheckboxHandler = (checked: boolean) => this.setState({ useGeneralFlexItemStyles: checked });

    changeOrder = (count: number) => this.setState({ useGeneralFlexItemStyles: false, order: count.toString() });

    changeFlexGrow = (count: number) => this.setState({ useGeneralFlexItemStyles: false, flexGrow: count.toString() });

    changeFlexShrink = (count: number) => this.setState({ useGeneralFlexItemStyles: false, flexShrink: count.toString() });

    changeFlexBasis = (count: number) => this.setState({ useGeneralFlexItemStyles: false, flexBasis: count.toString() + 'px' });

    selectFlexBasis = (value: string) => this.setState({ useGeneralFlexItemStyles: false, flexBasis: value });

    selectAlignSelf = (value: string) => this.setState({ useGeneralFlexItemStyles: false, alignSelf: value });

    render = () => {

        var styles = this.props.height ? { paddingBottom: this.props.height + 'px' } : {};

        styles = Object.assign({}, styles, this.state.useGeneralFlexItemStyles ? this.props.flexItem : this.getStyles());

        return (
            <div className="flex-item" style={styles}>
                <div className="flex-item__index">{this.props.index}</div>
                <div><Checkbox title=".flex-item" checked={this.state.useGeneralFlexItemStyles} onClick={this.useGeneralFlexItemStylesCheckboxHandler} /></div>
                <div className="flex-item__text flex-item__text_center">или</div>
                <div><Counter title="order:" min={-99} max={99} count={0} onChange={this.changeOrder} /></div>
                <div><Counter title="flex-grow:" min={0} max={99} count={0} onChange={this.changeFlexGrow} /></div>
                <div><Counter title="flex-shrink:" min={0} max={99} count={1} onChange={this.changeFlexShrink} /></div>
                <div>
                    <Select title="flex-basis:" list={[
                        'auto', 'content', <Counter title="" min={0} step={100} count={300} postfix="px" onChange={this.changeFlexBasis} />
                    ]} onChange={this.selectFlexBasis} />
                </div>
                <div><Select title="align-self:" list={['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']} onChange={this.selectAlignSelf} /></div>
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