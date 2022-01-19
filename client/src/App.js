import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import CreateProduct from './components/product/CreateProduct';
import Products from './components/product/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-product" component={CreateProduct} />
          <Route path="/" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
