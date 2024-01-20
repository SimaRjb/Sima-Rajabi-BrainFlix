import logo from './logo.svg';
import './App.css';
import './components/Header/Header'
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Comments from './components/Comments/Comments';
function App() {
  return (
    <div className="App">
      <body>
      <Header/>
    <MainVideo/>
    <Comments/>
    </body>
    </div>
  );
}

export default App;
