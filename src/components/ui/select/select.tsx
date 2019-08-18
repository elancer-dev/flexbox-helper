import React from 'react';
import Helper from './../../../lib/helper';
import './select.scss';

type TProps = {
    title: string;
    list: Array<any>;
    onChange?: (item: string) => any;
}

type TReactState = {
    currentItem: number | undefined;
    showList: boolean;
}

class Select extends React.PureComponent<TProps, TReactState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            currentItem: this.props.list.length ? 0 : undefined,
            showList: false,
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', this.hideList, true);
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.hideList, true);
    }

    hideList = () => {
        if (this.state.showList) {
            this.setState({ showList: false });
        }
    }

    showList = () => {
        this.setState({ showList: !this.state.showList });
    }

    chooseItem = (i: number) => {

        if (this.state.currentItem !== i) {
            this.setState({
                currentItem: i,
                showList: false,
            });

            if (Helper.isSet(this.props.onChange)) {

                var item = this.props.list[i];

                if (Helper.isObject(item)) {
                    item.props.onChange(item.props.count);
                } else {
                    this.props.onChange(item);
                }

            }
        } else {
            this.setState({ showList: false });
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
                    <div className="ui-select__current-item">{Helper.isSet(this.state.currentItem) ? this.props.list[this.state.currentItem] : ''}</div>
                    <div className="ui-select__show-all" onClick={this.showList}><div></div></div>
                    <div className="ui-select__items-list" style={{ display: this.state.showList ? 'block' : 'none' }}>
                        {this.props.list.map((item, i) => <div key={i} onClick={() => this.chooseItem(i)}>{Helper.isObject(item) ? this.parseTitle(item, 'px') : item}</div>)}
                    </div>
                </div>
            </div>
        )

    }

}

export default Select;