import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
import Helper from '../../lib/helper';
// import RunningLabel from './../running-label/running-label';
import './control-panel.scss';

import Hint from '../hint/hint';
import ParamName from '../param-name/param-name';
import ParamOption from '../param-option/param-optin';

type TProps = {
    // initTimerInterval?: number;
}

interface TPS extends TProps {
    timerInterval: number;
    action: ActionFunction;
}

class ControlPanel extends React.PureComponent<TPS> {

    constructor(props: TPS) {
        super(props);

        // if (Helper.isSet(this.props.initTimerInterval) && this.props.initTimerInterval >= 0) {
        //     this.props.action(actionsHandler, 'setInterval', { val: this.props.initTimerInterval });
        // }
    }

    // buttonAddClickHandler(inc: number) {
    //     if (this.props.timerInterval + inc >= 0) {
    //         this.props.action(actionsHandler, 'addInterval', { add: inc });
    //     }
    // }

    // buttonMultClickHandler(mult: number) {
    //     if (this.props.timerInterval > 0) {
    //         this.props.action(actionsHandler, 'multInterval', { mult: mult });
    //     }
    // }

    // buttonClearClickHandler() {
    //     if (this.props.timerInterval > 0) {
    //         this.props.action(actionsHandler, 'clearInterval', {});
    //     }
    // }

    render() {

        return (
            <div className="flexbox-helper">
                <div className="flexbox-helper__control-panel">

                    <div className="flexbox-helper__section-tag">{'.flex-container {'}</div>

                    <div className="flexbox-helper__params">
                        <ParamName hintMessage="Модель flexbox-разметки связана с определенным значением CSS-свойства display родительского html-элемента, содержащего внутри себя дочерние блоки.">
                            display:
                        </ParamName>

                        <ParamOption
                            hintMessage="Генерирует flex-контейнер уровня блока"
                            paramTag="flexContainer"
                            paramName="display"
                            paramValue="flex"
                        >
                            flex
                        </ParamOption>

                        <Hint message="Генерирует flex-контейнер уровня блока">
                            <div className="flexbox-helper__param-option flexbox-helper__param-option_current">flex</div>
                        </Hint>
                        <Hint message="Генерирует flex-контейнер уровня строки">
                            <div className="flexbox-helper__param-option">inline-flex</div>
                        </Hint>
                    </div>

                    <div className="flexbox-helper__params">

                        <Hint message="Управляет направлением главной оси, вдоль которой укладываются flex-элементы.">
                            <div className="flexbox-helper__param-name">flex-direction:</div>
                        </Hint>

                        <div className="flexbox-helper__param-option flexbox-helper__param-option_default flexbox-helper__param-option_current">row</div>
                        <div className="flexbox-helper__param-option">row-reverse</div>
                        <div className="flexbox-helper__param-option">column</div>
                        <div className="flexbox-helper__param-option">column-reverse</div>

                    </div>

                    <div className="flexbox-helper__params">
                        <Hint message="Свойство определяет, будет ли flex-контейнер однострочным или многострочным, а также задает направление поперечной оси.">
                            <div className="flexbox-helper__param-name">flex-wrap:</div>
                        </Hint>
                        <div className="flexbox-helper__param-option flexbox-helper__param-option_default flexbox-helper__param-option_current">nowrap</div>
                        <div className="flexbox-helper__param-option">wrap</div>
                        <div className="flexbox-helper__param-option">wrap-reverse</div>
                    </div>

                    <div className="flexbox-helper__section-tag">{'}'}</div>

                    <div className="flexbox-helper__params-note">
                        (underlined default value)
                    </div>

                </div>
                <div className="flexbox-helper__container">
                    <div className="flexbox-helper__flex-item">1</div>
                    <div className="flexbox-helper__flex-item">2</div>
                    <div className="flexbox-helper__flex-item">3</div>
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state: TState, props: TProps) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch, props: TProps) => {
    return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);