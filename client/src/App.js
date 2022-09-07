import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import GroceryList from "./GroceryList";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/GroceryList">
        <Header />
          <GroceryList/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
