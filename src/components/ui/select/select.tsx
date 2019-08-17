import React from 'react';
import Helper from './../../../lib/helper';
import './select.scss';

type TProps = {
    title: string;
    list: Array<any>;
    onChange?: (item: string) => any;
}

type TReactState = {
    // currentItem: string;
    currentItem: number | undefined;
    showList: boolean;
}

class Select extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            // currentItem: this.props.list.length ? this.props.list[0] : '',
            currentItem: this.props.list.length ? 0 : undefined,
            showList: false,
        }
    }

    showList = () => {
        this.setState({ showList: !this.state.showList });
    }

    chooseItem = (item: any, i: number) => {

        this.setState({
            currentItem: i,
            showList: false,
        });

        if (Helper.isSet(this.props.onChange)) {

            if (Helper.isObject(item)) {
                this.props.onChange('0');
            } else {
                this.props.onChange(item);
            }

        }

    }

    render = () => {

        return (
            <div className="ui-select">
                <div>{this.props.title}</div>
                <div className="ui-select__box">
                    <div className="ui-select__current-item">{Helper.isSet(this.state.currentItem) ? this.props.list[this.state.currentItem] : ''}</div>
                    <div className="ui-select__show-all" onClick={this.showList}><div></div></div>
                    <div className="ui-select__items-list" style={{ display: this.state.showList ? 'block' : 'none' }}>
                        {this.props.list.map((item, i) => <div key={i} onClick={() => this.chooseItem(item, i)}>{item}</div>)}
                    </div>
                </div>
            </div>
        )

    }

}

export default Select;