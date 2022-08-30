import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GroceryList from "./GroceryList";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";


const App = () => {
 
  return (
   
      <BrowserRouter>
      <GlobalStyles/>
      <Switch>
    <Route exact path="/">
      
     <HomePage />
    </Route>
    <Header/>
    <Route exact path="/groceryList">
      <GroceryList/>
    </Route>
      </Switch>
      </BrowserRouter>
   
  );
};

export default App;
