import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";



//-------------------------------------------------
//                  Routing
//-------------------------------------------------
/*
  - make Route that has path
  - includes the component inside that route
  - go to index.js and add <BrowserRouter> tag, and include the <App> inside it
  - switch is used so react will only run one route at a time 
    ..(not /prodcuts + /products/id .. only one of them), like laravel default route system
*/

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <div>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome"/> {/* so obvious, it will redirect you to the route welcome */}
            </Route>
            <Route path="/welcome">
              <Welcome/>
            </Route>
            <Route path="/products" exact> {/* exact so if we enter /products/id it won't be confuse */}
              <Products/>
            </Route>
            <Route path="/products/:productId">
              <ProductDetail/>
            </Route>
          </Switch>
        </div>
      </main>
    </div>
    
    
  );
}

export default App;
