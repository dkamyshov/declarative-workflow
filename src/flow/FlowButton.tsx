import * as style from './style.less';
import React from 'react';

interface FlowButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

class FlowButton extends React.Component<FlowButtonProps> {
  render() {
    const { label, onClick, disabled } = this.props;

    return (
      <button className={style['flow-button']} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  }
}

export default FlowButton;
