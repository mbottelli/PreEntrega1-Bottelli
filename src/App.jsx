import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// Components
import {MainRouter} from './router'
import { CartProvider } from './context';

function App() {
  return (
    <div>
        <CartProvider>
          <MainRouter />
        </CartProvider>
    </div>
  );
}

export default App;
