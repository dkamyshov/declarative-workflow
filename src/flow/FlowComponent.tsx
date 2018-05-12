import * as style from './style.less';
import React from 'react';
import { IFlowComponent } from './Flow';

class FlowComponent extends React.Component<{
  description: IFlowComponent;
  state: any;
  setFlowState: (name: string, value: any) => void;
}> {
  render() {
    const { description, state, setFlowState } = this.props;

    switch (description.type) {
      case 'p': {
        return <p>{description.value}</p>;
      }

      case 'input': {
        return (
          <div className={style['flow-component-input']}>
            <label>{description.label}</label>
            <input
              value={state[description.name || 'unknown'] || ''}
              onChange={e => {
                setFlowState(String(description.name), e.target.value);
              }}
            />
          </div>
        );
      }

      case 'select': {
        return (
          <div className={style['flow-component-select']}>
            <label>{description.label}</label>
            <select
              value={state[description.name || 'unknown'] || 'default'}
              onChange={e => {
                setFlowState(String(description.name), e.target.value);
              }}
            >
              {description.options &&
                description.options.map((option, i) => (
                  <option value={option.value}>{option.label}</option>
                ))}
            </select>
          </div>
        );
      }

      case 'condition': {
        const condition = description.condition;
        if (!condition) return null;
        const conditionIsTrue = condition.equals === state[condition.name];

        /*if(conditionIsTrue) {
          const elements = condition.content.map((componentDescription, i) => {
            return (
              <FlowComponent
                key={i}
                state={state}
                setFlowState={setFlowState}
                description={componentDescription}
              />
            );
          });

          return elements;
        }*/

        if (conditionIsTrue) {
          const elements: JSX.Element[] = [];

          for (let i in condition.content) {
            const conditionElement = condition.content[i];

            elements.push(
              <FlowComponent
                key={i}
                state={state}
                setFlowState={setFlowState}
                description={conditionElement}
              />
            );
          }

          return elements as JSX.Element[];
        }

        return null;
      }

      default: {
        return (
          <div className={style['failed-component']}>
            Неверное описание компонента.
          </div>
        );
      }
    }
  }
}

export default FlowComponent;
