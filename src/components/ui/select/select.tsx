import React from 'react';
import Helper from './../../../lib/helper';
import './select.scss';

type TProps = {
    title: string;
    list: Array<any>;
    onChange?: (item: string) => any;
}

type TReactState = {
    currentItem: string;
    showList: boolean;
}

class Select extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            currentItem: this.props.list.length ? this.props.list[0] : '',
            showList: false,
        }
    }

    showList = () => {
        this.setState({ showList: !this.state.showList });
    }

    chooseItem = (item: any) => {

        this.setState({
            currentItem: item,
            showList: false,
        });

        if (Helper.isSet(this.props.onChange)) {

            if (Helper.isObject(item)) {
                item.props.onChange(item.props.count);
            } else {
                this.props.onChange(item);
            }

        }

    }

    parseTitle = (item: any, title: string): string => {

        if (Helper.isSet(item.props.postfix)) {
            return item.props.postfix.toString();
        }

        return title;
    }

    render = () => {

        return (
            <div className="ui-select">
                <div>{this.props.title}</div>
                <div className="ui-select__box">
                    <div className="ui-select__current-item">{this.state.currentItem}</div>
                    <div className="ui-select__show-all" onClick={this.showList}><div></div></div>
                    <div className="ui-select__items-list" style={{ display: this.state.showList ? 'block' : 'none' }}>
                        {this.props.list.map((item, i) => <div key={i} onClick={() => this.chooseItem(item)}>{Helper.isObject(item) ? this.parseTitle(item, 'px') : item}</div>)}
                    </div>
                </div>
            </div>
        )

    }

}

export default Select;