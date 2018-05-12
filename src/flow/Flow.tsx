import React from 'react';
import FlowScreen from './FlowScreen';

export interface IFlowComponent {
  type: string;
  name?: string;
  label?: string;
  value?: any;
  options?: {
    value: string;
    label: string;
  }[];
  condition?: {
    name: string;
    equals: string;
    content: IFlowComponent[];
  };
}

export interface IFlowTransition {
  label: string;
  to?: string;
  action?: string;
}

export interface IFlowScreen {
  title: string;
  stepCounter?: number[];
  content?: IFlowComponent[];
  transitions: {
    center?: IFlowTransition;
    left?: IFlowTransition;
    right?: IFlowTransition;
  };
}

export interface IFlow {
  initial: string;
  state: any;
  screens: {
    [name: string]: IFlowScreen;
  };
}

interface FlowProps {
  flow: IFlow;
}

interface FlowState {
  screen: string;
  state: any;
}

class Flow extends React.Component<FlowProps, FlowState> {
  constructor(props: FlowProps) {
    super(props);

    this.state = {
      screen: props.flow.initial,
      state: props.flow.state
    };
  }

  goTo = (screen: string) => {
    this.setState({
      screen
    });
  };

  setFlowState = (name: string, value: any) => {
    this.setState({
      state: {
        ...this.state.state,
        [name]: value
      }
    });
  };

  performAction = (name: string) => {
    if (name === 'commit') {
      alert(JSON.stringify(this.state.state, null, 4));
    }
  };

  render() {
    const { screen, state } = this.state;
    const { flow } = this.props;

    console.log(state);

    return (
      <div>
        <FlowScreen
          performAction={this.performAction}
          description={flow.screens[screen]}
          state={state}
          setFlowState={this.setFlowState}
          goTo={this.goTo}
        />
        <pre
          style={{
            whiteSpace: 'pre',
            padding: '8pt',
            color: 'grey',
            fontSize: '12pt'
          }}
        >
          {JSON.stringify(state, null, 4)}
        </pre>
      </div>
    );
  }
}

export default Flow;
