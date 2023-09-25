import { Route, Switch } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Products } from "./pages/Products";
import { MainHeader } from "./components/MainHeader";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="product/:productId"></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
