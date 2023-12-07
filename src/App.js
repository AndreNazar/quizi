import './style.scss';
import { BrowserRouter } from 'react-router-dom'
import WelcomePage from './components/page_welcome/WelcomePage.js';
import WindowRegions from './components/windows/WindowRegions.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <WindowRegions />
        <WelcomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
