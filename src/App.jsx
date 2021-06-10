import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { FormForComment } from './modules/form.jsx'
import store from './store/store';
import { Comments } from './modules/comments.jsx'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormForComment} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
