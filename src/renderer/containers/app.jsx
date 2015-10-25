import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic';
import './app.css';


class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
    children: PropTypes.node,
    queryResult: PropTypes.object,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // wait a bit more until remove the splash screen
    setTimeout(() => document.getElementById('loading').remove(), 2000);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="ui">
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    queryResult: state.queryResult,
  };
}

export default connect(mapStateToProps)(AppContainer);
