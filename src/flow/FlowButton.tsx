import * as style from './style.less';
import React from 'react';

interface FlowButtonProps {
  label: string;
  onClick?: () => void;
}

class FlowButton extends React.Component<FlowButtonProps> {
  render() {
    const { label, onClick } = this.props;

    return (
      <button className={style['flow-button']} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default FlowButton;
