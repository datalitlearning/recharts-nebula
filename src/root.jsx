import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'

export function render(element, seriesData, dimKey, measKeys) {
  ReactDOM.render(<App data={seriesData} dimKey={dimKey} measKeys={measKeys} />, element);
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}