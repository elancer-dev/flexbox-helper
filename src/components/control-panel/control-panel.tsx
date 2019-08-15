import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TState, ActionFunction } from './../../utils/types';
import { action, actionsHandler } from './../../utils/actions';
// import Helper from '../../lib/helper';
import './control-panel.scss';

// import Hint from '../hint/hint';
import ParamName from '../param-name/param-name';
import ParamOption from '../param-option/param-optin';

type TProps = {

}

interface TPS extends TProps, TState {
    action: ActionFunction;
}

class ControlPanel extends React.PureComponent<TPS> {

    // constructor(props: TPS) {
    //     super(props);
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
                            paramCurrentValue={this.props.styles.flexContainer.display}
                        />
                        <ParamOption
                            hintMessage="Генерирует flex-контейнер уровня строки"
                            paramTag="flexContainer"
                            paramName="display"
                            paramValue="inline-flex"
                            paramCurrentValue={this.props.styles.flexContainer.display}
                        />
                    </div>
                    <div className="flexbox-helper__params">
                        <ParamName hintMessage="Управляет направлением главной оси, вдоль которой укладываются flex-элементы, в соответствии с текущим режимом записи.">
                            flex-direction:
                        </ParamName>
                        <ParamOption
                            default={true}
                            hintMessage="Значение по умолчанию, слева направо (в rtl справа налево). Flex-элементы выкладываются в строку. Начало (main-start) и конец (main-end) направления главной оси соответствуют началу (inline-start) и концу (inline-end) инлайн-оси (inline-axis)."
                            paramTag="flexContainer"
                            paramName="flexDirection"
                            paramValue="row"
                            paramCurrentValue={this.props.styles.flexContainer.flexDirection}
                        />
                        <ParamOption
                            hintMessage="Направление справа налево (в rtl слева направо). Flex-элементы выкладываются в строку относительно правого края контейнера (в rtl — левого)."
                            paramTag="flexContainer"
                            paramName="flexDirection"
                            paramValue="row-reverse"
                            paramCurrentValue={this.props.styles.flexContainer.flexDirection}
                        />
                        <ParamOption
                            hintMessage="Направление сверху вниз. Flex-элементы выкладываются в колонку."
                            paramTag="flexContainer"
                            paramName="flexDirection"
                            paramValue="column"
                            paramCurrentValue={this.props.styles.flexContainer.flexDirection}
                        />
                        <ParamOption
                            hintMessage="Колонка с элементами в обратном порядке, снизу вверх."
                            paramTag="flexContainer"
                            paramName="flexDirection"
                            paramValue="column-reverse"
                            paramCurrentValue={this.props.styles.flexContainer.flexDirection}
                        />
                    </div>
                    <div className="flexbox-helper__params">
                        <ParamName hintMessage="Свойство определяет, будет ли flex-контейнер однострочным или многострочным, а также задает направление поперечной оси, определяющее направление укладки новых линий flex-контейнера.">
                            flex-wrap:
                        </ParamName>
                        <ParamOption
                            default={true}
                            hintMessage="Значение по умолчанию. Flex-элементы не переносятся, а располагаются в одну линию слева направо (в rtl справа налево)."
                            paramTag="flexContainer"
                            paramName="flexWrap"
                            paramValue="nowrap"
                            paramCurrentValue={this.props.styles.flexContainer.flexWrap}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы переносятся, располагаясь в несколько горизонтальных рядов (если не помещаются в один ряд) в направлении слева направо (в rtl справа налево)."
                            paramTag="flexContainer"
                            paramName="flexWrap"
                            paramValue="wrap"
                            paramCurrentValue={this.props.styles.flexContainer.flexWrap}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы переносятся на новые линии, располагаясь в обратном порядке слева-направо, при этом перенос происходит снизу вверх."
                            paramTag="flexContainer"
                            paramName="flexWrap"
                            paramValue="wrap-reverse"
                            paramCurrentValue={this.props.styles.flexContainer.flexWrap}
                        />
                    </div>
                    <div className="flexbox-helper__params">
                        <ParamName hintMessage="Свойство выравнивает flex-элементы по главной оси flex-контейнера, распределяя свободное пространство, незанятое flex-элементами. Когда элемент преобразуется в flex-контейнер, flex-элементы по умолчанию сгруппированы вместе (если для них не заданы поля margin). Промежутки добавляются после расчета значений margin и flex-grow. Если какие-либо элементы имеют ненулевое значение flex-grow или margin: auto;, свойство не будет оказывать влияния. Свойство не наследуется.">
                            justify-content:
                        </ParamName>
                        <ParamOption
                            default={true}
                            hintMessage="Значение по умолчанию. Flex-элементы выкладываются в направлении, идущем от начальной линии flex-контейнера."
                            paramTag="flexContainer"
                            paramName="justifyContent"
                            paramValue="flex-start"
                            paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы выкладываются в направлении, идущем от конечной линии flex-контейнера."
                            paramTag="flexContainer"
                            paramName="justifyContent"
                            paramValue="flex-end"
                            paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы выравниваются по центру flex-контейнера."
                            paramTag="flexContainer"
                            paramName="justifyContent"
                            paramValue="center"
                            paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это значение идентично параметру flex-start."
                            paramTag="flexContainer"
                            paramName="justifyContent"
                            paramValue="space-between"
                            paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                        />
                        <ParamOption
                            hintMessage="Flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя смежными flex-элементами было одинаковым, а расстояние между первым / последним flex-элементами и краями flex-контейнера составляло половину от расстояния между flex-элементами."
                            paramTag="flexContainer"
                            paramName="justifyContent"
                            paramValue="space-around"
                            paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                        />
                    </div>
                    <div className="flexbox-helper__params">
                        <ParamName hintMessage="Свойство выравнивает flex-элементы, в том числе и анонимные flex-элементы по поперечной оси. Не наследуется.">
                            align-items:
                        </ParamName>
                        <ParamOption
                            default={true}
                            hintMessage="Если поперечный размер flex-элемента вычисляется как auto и ни одно из поперечных значений margin не равно auto, элемент растягивается. Значение по умолчанию."
                            paramTag="flexContainer"
                            paramName="alignItems"
                            paramValue="stretch"
                            paramCurrentValue={this.props.styles.flexContainer.alignItems}
                        />
                        <ParamOption
                            hintMessage="Верхний край flex-элемента помещается вплотную с flex-линией (или на расстоянии, с учетом заданных полей margin и рамок border элемента), проходящей через начало поперечной оси."
                            paramTag="flexContainer"
                            paramName="alignItems"
                            paramValue="flex-start"
                            paramCurrentValue={this.props.styles.flexContainer.alignItems}
                        />
                        <ParamOption
                            hintMessage="Нижний край flex-элемента помещается вплотную с flex-линией (или на расстоянии, с учетом заданных полей margin и рамок border элемента), проходящей через конец поперечной оси."
                            paramTag="flexContainer"
                            paramName="alignItems"
                            paramValue="flex-end"
                            paramCurrentValue={this.props.styles.flexContainer.alignItems}
                        />
                        <ParamOption
                            hintMessage="Поля flex-элемента центрируется по поперечной оси в пределах flex-линии."
                            paramTag="flexContainer"
                            paramName="alignItems"
                            paramValue="center"
                            paramCurrentValue={this.props.styles.flexContainer.alignItems}
                        />
                        <ParamOption
                            hintMessage="Базовые линии всех flex-элементов, участвующих в выравнивании, совпадают."
                            paramTag="flexContainer"
                            paramName="alignItems"
                            paramValue="baseline"
                            paramCurrentValue={this.props.styles.flexContainer.alignItems}
                        />
                    </div>
                    <div className="flexbox-helper__section-tag">{'}'}</div>

                    <div className="flexbox-helper__section-tag">{'.flex-item {'}</div>

                    <div className="flexbox-helper__section-tag">{'}'}</div>

                    <div className="flexbox-helper__params-note">
                        (underlined default value)
                    </div>

                </div>
                <span>span</span>
                <div className="flexbox-helper__container" style={this.props.styles.flexContainer}>
                    <div className="flexbox-helper__flex-item">1</div>
                    <div className="flexbox-helper__flex-item">2</div>
                    <div className="flexbox-helper__flex-item">3</div>
                </div>
                <span>span</span>
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