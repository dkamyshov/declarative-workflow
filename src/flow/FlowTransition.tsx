import React from 'react';
import { IFlowTransition } from './Flow';
import FlowButton from './FlowButton';

class FlowTransition extends React.Component<{
  description: IFlowTransition;
  goTo: (name: string) => any;
  performAction: (name: string) => any;
  state: any;
}> {
  onClick = () => {
    const { description, goTo, performAction } = this.props;

    if (description.to) {
      goTo(description.to);
    } else if (description.action) {
      performAction(description.action);
    }
  };

  render() {
    const { description, state } = this.props;

    let disabled = false;

    if (description.disableIfEmpty) {
      disabled = description.disableIfEmpty.some(statePart => {
        return (
          typeof state[statePart] === 'undefined' || state[statePart] === ''
        );
      });
    }

    return (
      <FlowButton
        label={description.label}
        onClick={this.onClick}
        disabled={disabled}
      />
    );
  }
}

export default FlowTransition;
