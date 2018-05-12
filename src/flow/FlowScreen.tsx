import * as style from './style.less';
console.log(style);
import React from 'react';
import { IFlowScreen } from './Flow';
import FlowComponent from './FlowComponent';
import FlowButton from './FlowButton';
import FlowStepCounter from './FlowStepCounter';

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
            <FlowButton
              label={description.transitions.center.label}
              onClick={() => {
                const transition = description.transitions.center;

                if (transition) {
                  if (transition.to) {
                    goTo(transition.to);
                  } else if (transition.action) {
                    performAction(transition.action);
                  }
                }
              }}
            />
          </div>
        ) : (
          <div className={style['transition-container']}>
            <div className={style['transition-element']}>
              {description.transitions.left && (
                <FlowButton
                  label={description.transitions.left.label}
                  onClick={() => {
                    const transition = description.transitions.left;

                    if (transition) {
                      if (transition.to) {
                        goTo(transition.to);
                      } else if (transition.action) {
                        performAction(transition.action);
                      }
                    }
                  }}
                />
              )}
            </div>
            <div className={style['transition-element']}>
              {description.transitions.right && (
                <FlowButton
                  label={description.transitions.right.label}
                  onClick={() => {
                    const transition = description.transitions.right;

                    if (transition) {
                      if (transition.to) {
                        goTo(transition.to);
                      } else if (transition.action) {
                        performAction(transition.action);
                      }
                    }
                  }}
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
