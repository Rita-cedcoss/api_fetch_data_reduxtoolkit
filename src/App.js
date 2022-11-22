import logo from './logo.svg';
import './App.css';
import ShoppingCart from './UI_ShoppingCart/ShoppingCart';
import './UI_ShoppingCart/Cart.css'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
function App() {
  return (
    <>
    <Provider store={store}>
    <ShoppingCart></ShoppingCart>
    </Provider>
   
    </>
  );
}

export default App;
