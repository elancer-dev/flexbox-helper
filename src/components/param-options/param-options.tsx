import React from 'react';
import ParamName from '../param-name/param-name';
import ParamOption from '../param-option/param-optin';
import { TStyles } from '../../utils/types';

type TProps = {
    paramTag: keyof TStyles;
    paramName: string;
    paramTitle: string;
    paramHint: string;
    paramValues: Array<{ value: string; hint: string; }>;
    paramDefaultValue: number;
    paramCurrentValue: string;
}

class ParamOptions extends React.PureComponent<TProps> {

    render = () => {

        return (
            <div className="flexbox-helper__params">
                <ParamName hintMessage={this.props.paramHint}>
                    {this.props.paramTitle}
                </ParamName>
                {this.props.paramValues.map((item, i) =>
                    <ParamOption
                        key={i}
                        default={i === this.props.paramDefaultValue}
                        hintMessage={item.hint}
                        paramTag={this.props.paramTag}
                        paramName={this.props.paramName}
                        paramValue={item.value}
                        paramCurrentValue={this.props.paramCurrentValue === item.value}
                    />
                )}
            </div>
        )

    }

}

export default ParamOptions;