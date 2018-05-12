import * as style from './style.less';
import cn from 'classnames';
import React from 'react';

class FlowStepCounter extends React.Component<{
  stepCounter: number[];
}> {
  render() {
    const { stepCounter } = this.props;

    const current = stepCounter[0];
    const total = stepCounter[1];

    const elements = [];

    for (let i = 1; i <= total; ++i) {
      elements.push(
        <div
          key={i}
          className={cn(style['step-counter-element'], {
            [style['active']]: i === current
          })}
        />
      );
    }

    return (
      <div className={style['step-counter-container']}>
        <div className={style['step-counter']}>{elements}</div>
      </div>
    );
  }
}

export default FlowStepCounter;
