import { Route, Switch } from 'react-router';
import MainLayout from './layout/main-layout/MainLayout';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/*" exact component={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;
