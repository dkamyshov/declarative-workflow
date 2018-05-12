import React from 'react';
import { Flow } from './flow';
import flow from './process';

export default class extends React.Component {
  render() {
    return <Flow flow={flow} />;
  }
}
