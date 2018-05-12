import * as style from './style.less';
console.log(style);
import React from 'react';
import { IFlowScreen } from './Flow';
import FlowComponent from './FlowComponent';
import FlowButton from './FlowButton';
import FlowStepCounter from './FlowStepCounter';
import FlowTransition from './FlowTransition';

interface FlowScreenProps {
  description: IFlowScreen;
  performAction: (name: string) => void;
  state: any;
  goTo: (name: string) => void;
  setFlowState: (name: string, value: any) => void;
}

class FlowScreen extends React.Component<FlowScreenProps> {
  render() {
    const {
      description,
      goTo,
      state,
      setFlowState,
      performAction
    } = this.props;

    return (
      <div className={style['flow-screen']}>
        <h1>{description.title}</h1>

        {description.content &&
          description.content.map((componentDescription, i) => (
            <FlowComponent
              key={i}
              setFlowState={setFlowState}
              state={state}
              description={componentDescription}
            />
          ))}

        {description.transitions.center ? (
          <div className={style['transition-center']}>
            <FlowTransition
              state={state}
              description={description.transitions.center}
              goTo={goTo}
              performAction={performAction}
            />
          </div>
        ) : (
            <div className={style['transition-container']}>
              <div className={style['transition-element']}>
                {description.transitions.left && (
                  <FlowTransition
                    description={description.transitions.left}
                    goTo={goTo}
                    performAction={performAction}
                    state={state}
                  />
                )}
              </div>
              <div className={style['transition-element']}>
                {description.transitions.right && (
                  <FlowTransition
                    description={description.transitions.right}
                    goTo={goTo}
                    performAction={performAction}
                    state={state}
                  />
                )}
              </div>
            </div>
          )}

        {description.stepCounter && (
          <FlowStepCounter stepCounter={description.stepCounter} />
        )}
      </div>
    );
  }
}

export default FlowScreen;
