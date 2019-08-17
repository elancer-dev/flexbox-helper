import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import { TState, TStyles } from './../../utils/types';
// import { action, actionsHandler } from './../../utils/actions';
import ParamOptions from '../param-options/param-options';
import ControlPanel from '../control-panel/control-panel';
import FlexItems from '../flex-items/flex-items';

import './flexbox-helper.scss';

type TProps = {}

type TPS = TProps & {
    styles: TStyles;
    flexItemsCount: number;
    flexItemsVariousHeight: boolean;
    flexContainerFixedHeight: boolean;
    // action: ActionFunction;
}

class FlexboxHelper extends React.PureComponent<TPS> {

    render() {

        return (
            <div className="flexbox-helper">

                <div className="flexbox-helper__section-tag">{'.flex-container {'}</div>
                <ParamOptions
                    paramTag="flexContainer" paramName="display" paramTitle="display:"
                    paramHint="Модель flexbox-разметки связана с определенным значением CSS-свойства display родительского html-элемента, содержащего внутри себя дочерние блоки."
                    paramValues={[
                        { value: 'flex', hint: "Генерирует flex-контейнер уровня блока" },
                        { value: 'inline-flex', hint: "Генерирует flex-контейнер уровня строки" },
                    ]}
                    paramDefaultValue={-1} paramCurrentValue={this.props.styles.flexContainer.display}
                />
                <ParamOptions
                    paramTag="flexContainer" paramName="flexDirection" paramTitle="flex-direction:"
                    paramHint="Управляет направлением главной оси, вдоль которой укладываются flex-элементы, в соответствии с текущим режимом записи."
                    paramValues={[
                        { value: 'row', hint: "Значение по умолчанию, слева направо (в rtl справа налево). Flex-элементы выкладываются в строку. Начало (main-start) и конец (main-end) направления главной оси соответствуют началу (inline-start) и концу (inline-end) инлайн-оси (inline-axis)." },
                        { value: 'row-reverse', hint: "Направление справа налево (в rtl слева направо). Flex-элементы выкладываются в строку относительно правого края контейнера (в rtl — левого)." },
                        { value: 'column', hint: "Направление сверху вниз. Flex-элементы выкладываются в колонку." },
                        { value: 'column-reverse', hint: "Колонка с элементами в обратном порядке, снизу вверх." },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexContainer.flexDirection}
                />
                <ParamOptions
                    paramTag="flexContainer" paramName="flexWrap" paramTitle="flex-wrap:"
                    paramHint="Свойство определяет, будет ли flex-контейнер однострочным или многострочным, а также задает направление поперечной оси, определяющее направление укладки новых линий flex-контейнера."
                    paramValues={[
                        { value: 'nowrap', hint: "Значение по умолчанию. Flex-элементы не переносятся, а располагаются в одну линию слева направо (в rtl справа налево)." },
                        { value: 'wrap', hint: "Flex-элементы переносятся, располагаясь в несколько горизонтальных рядов (если не помещаются в один ряд) в направлении слева направо (в rtl справа налево)." },
                        { value: 'wrap-reverse', hint: "Flex-элементы переносятся на новые линии, располагаясь в обратном порядке слева-направо, при этом перенос происходит снизу вверх." },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexContainer.flexWrap}
                />
                <ParamOptions
                    paramTag="flexContainer" paramName="justifyContent" paramTitle="justify-content:"
                    paramHint="Свойство выравнивает flex-элементы по главной оси flex-контейнера, распределяя свободное пространство, незанятое flex-элементами. Когда элемент преобразуется в flex-контейнер, flex-элементы по умолчанию сгруппированы вместе (если для них не заданы поля margin). Промежутки добавляются после расчета значений margin и flex-grow. Если какие-либо элементы имеют ненулевое значение flex-grow или margin: auto;, свойство не будет оказывать влияния. Свойство не наследуется."
                    paramValues={[
                        { value: 'flex-start', hint: "Значение по умолчанию. Flex-элементы выкладываются в направлении, идущем от начальной линии flex-контейнера." },
                        { value: 'flex-end', hint: "Flex-элементы выкладываются в направлении, идущем от конечной линии flex-контейнера." },
                        { value: 'center', hint: "Flex-элементы выравниваются по центру flex-контейнера." },
                        { value: 'space-between', hint: "Flex-элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это значение идентично параметру flex-start." },
                        { value: 'space-around', hint: "Flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя смежными flex-элементами было одинаковым, а расстояние между первым / последним flex-элементами и краями flex-контейнера составляло половину от расстояния между flex-элементами." },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexContainer.justifyContent}
                />
                <ParamOptions
                    paramTag="flexContainer" paramName="alignItems" paramTitle="align-items:"
                    paramHint="Свойство выравнивает flex-элементы, в том числе и анонимные flex-элементы по поперечной оси. Не наследуется."
                    paramValues={[
                        { value: 'stretch', hint: "Если поперечный размер flex-элемента вычисляется как auto и ни одно из поперечных значений margin не равно auto, элемент растягивается. Значение по умолчанию." },
                        { value: 'flex-start', hint: "Верхний край flex-элемента помещается вплотную с flex-линией (или на расстоянии, с учетом заданных полей margin и рамок border элемента), проходящей через начало поперечной оси." },
                        { value: 'flex-end', hint: "Нижний край flex-элемента помещается вплотную с flex-линией (или на расстоянии, с учетом заданных полей margin и рамок border элемента), проходящей через конец поперечной оси." },
                        { value: 'center', hint: "Поля flex-элемента центрируется по поперечной оси в пределах flex-линии." },
                        { value: 'baseline', hint: "Базовые линии всех flex-элементов, участвующих в выравнивании, совпадают." },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexContainer.alignItems}
                />
                <ParamOptions
                    paramTag="flexContainer" paramName="alignContent" paramTitle="align-content:"
                    paramHint="Свойство выравнивает строки в flex-контейнере при наличии дополнительного пространства на поперечной оси, аналогично выравниванию отдельных элементов на главной оси с помощью свойства justify-content. Свойство не влияет на однострочный flex-контейнер. Не наследуется."
                    paramValues={[
                        { value: 'stretch', hint: "Значение по умолчанию. Строки flex-элементов равномерно растягиваются, заполняя все доступное пространство. Если оставшееся свободное пространство отрицательно, это значение идентично flex-start. В противном случае свободное пространство будет разделено поровну между всеми строками, увеличивая их поперечный размер." },
                        { value: 'flex-start', hint: "Строки укладываются по направлению к началу flex-контейнера. Край первой строки помещается вплотную к краю flex-контейнера, каждая последующая — вплотную к предыдущей строке" },
                        { value: 'flex-end', hint: "Строки укладываются по направлению к концу flex-контейнера. Край последней строки помещается вплотную к краю flex-контейнера, каждая предыдущая — вплотную к последующей строке." },
                        { value: 'center', hint: "Строки укладываются по направлению к центру flex-контейнера. Строки расположены вплотную друг к другу и выровнены по центру flex-контейнера с равным расстоянием между начальным краем содержимого flex-контейнера и первой строкой и между конечным краем содержимого flex-контейнера и последней строкой." },
                        { value: 'space-between', hint: "Строки равномерно распределены в flex-контейнере. Если оставшееся свободное пространство отрицательно или в flex-контейнере имеется только одна flex-линия, это значение идентично flex-start. В противном случае край первой строки помещается вплотную к начальному краю содержимого flex-контейнера, край последней строки — вплотную к конечному краю содержимого flex-контейнера. Остальные строки распределены так, чтобы расстояние между любыми двумя соседними строками было одинаковым." },
                        { value: 'space-around', hint: "Строки равномерно распределены в flex-контейнере с половинным пробелом на обоих концах. Если оставшееся свободное пространство отрицательно, это значение идентично центcenter. В противном случае строки распределяются таким образом, чтобы расстояние между любыми двумя соседними строками было одинаковым, а расстояние между первой / последней строками и краями содержимого flex-контейнера составляло половину от расстояния между строками." },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexContainer.alignContent}
                />
                <div className="flexbox-helper__section-tag">{'}'}</div>

                <div className="flexbox-helper__section-tag">{'.flex-item {'}</div>
                <ParamOptions
                    paramTag="flexItem" paramName="flexGrow" paramTitle="flex-grow:"
                    paramHint=""
                    paramValues={[
                        { value: '0', hint: "" },
                        { value: '1', hint: "" },
                        { value: '2', hint: "" },
                        { value: '3', hint: "" },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexItem.flexGrow}
                />
                <ParamOptions
                    paramTag="flexItem" paramName="flexShrink" paramTitle="flex-shrink:"
                    paramHint=""
                    paramValues={[
                        { value: '0', hint: "" },
                        { value: '1', hint: "" },
                        { value: '2', hint: "" },
                        { value: '3', hint: "" },
                    ]}
                    paramDefaultValue={1} paramCurrentValue={this.props.styles.flexItem.flexShrink}
                />
                <ParamOptions
                    paramTag="flexItem" paramName="flexBasis" paramTitle="flex-basis:"
                    paramHint=""
                    paramValues={[
                        { value: 'auto', hint: "" },
                        { value: 'content', hint: "" },
                        { value: '200px', hint: "" },
                        { value: '300px', hint: "" },
                        { value: '400px', hint: "" },
                    ]}
                    paramDefaultValue={0} paramCurrentValue={this.props.styles.flexItem.flexBasis}
                />
                <div className="flexbox-helper__section-tag">{'}'}</div>

                <div className="flexbox-helper__params-note">
                    <sup>*</sup>(подчеркнутое - значение по умолчанию)
                </div>

                <ControlPanel />

                <div className="flexbox-helper__container-border">
                    <span>[span]</span>
                    <div className="flexbox-helper__container" style={
                        Object.assign({}, this.props.styles.flexContainer, this.props.flexContainerFixedHeight ? { height: '1000px' } : {})
                    }>
                        <FlexItems count={this.props.flexItemsCount} variousHeight={this.props.flexItemsVariousHeight} />
                    </div>
                    <span>[span]</span>
                </div>

            </div>
        )

    }

}

const mapStateToProps = (state: TState) => {
    return {
        styles: state.styles,
        flexItemsCount: state.flexItemsCount,
        flexItemsVariousHeight: state.flexItemsVariousHeight,
        flexContainerFixedHeight: state.flexContainerFixedHeight,
    };
};

const mapDispatchToProps = () => {
    return {};
    // return bindActionCreators({ action: action }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlexboxHelper);