import logo from './logo.svg';
import './App.css';
import Header from './views/header'
import Items from './views/items';
import Shop from './views/shop';
import Collection from './views/collection';
import Bathing from './views/bathing_soaps';
import Story from './views/story';
import Last from './views/last';
import Product1 from './views/product1';

function App() {
  return (
    <div>
      <Header/>
      <div>Carousel</div>
      <Shop/>
      <Collection/>
      <Bathing/>
      <Story/>
      <Last/>
      
    </div>
  );
}

export default App;
