import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppStore } from "./AppStore";
import { App } from "./App";

const store = new AppStore();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
