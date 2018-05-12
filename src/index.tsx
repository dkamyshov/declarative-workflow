import * as style from './index.less';

import React from 'react';
import { render } from 'react-dom';

class Dummy extends React.Component {
  render() {
    return null;
  }
}

class EntryPoint extends React.Component<
  {},
  {
    Component: React.ComponentClass<any>;
    loaded: boolean;
    loading: boolean;
  }
  > {
  state = {
    Component: Dummy,
    loading: false,
    loaded: false
  };

  loadApplication = () => {
    this.setState({
      loading: true
    });

    import(/* webpackChunkName: "application" */ './Application').then(
      Component => {
        // delay for demonstrational pupropses
        setTimeout(
          () =>
            this.setState({
              Component: Component.default,
              loaded: true
            }),
          500
        );
      }
    );
  };

  render() {
    const { Component, loading, loaded } = this.state;

    if (loaded) {
      return <Component />;
    }

    return (
      <div className={style['index']}>
        <button
          disabled={loading}
          className={style['load-app']}
          onClick={this.loadApplication}
        >
          {loading ? 'Загружаем...' : 'Загрузить приложение'}
        </button>
      </div>
    );
  }
}

render(<EntryPoint />, document.getElementById('root'));
