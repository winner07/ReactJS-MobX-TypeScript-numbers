import * as React from 'react';
import { observer } from 'mobx-react';
import { AppStore } from "./AppStore";

@observer
export class App extends React.Component<{ store: AppStore }, {}> {
  handleRecalc = () => {
    this.props.store.recalc();
  }

  render(){
    const store = this.props.store;

    return (
      <div>
        <button onClick={this.handleRecalc}>Recalc</button>

        {!!store.d.length &&
          <ul>
            <li>
              a: {store.a.join(', ')}
            </li>
            <li>
              b: {store.b.join(', ')}
            </li>
            <li>
              c: {store.c.join(', ')}
            </li>
            <li>
              d: {store.d.join(', ')}
            </li>
          </ul>
        }
      </div>
    );
  }
}
