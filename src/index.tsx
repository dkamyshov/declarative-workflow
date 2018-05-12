import './index.less';

import React from 'react';
import { render } from 'react-dom';

import flow from './process';
import { Flow } from './flow';

render(<Flow flow={flow} />, document.getElementById('root'));
