import NavigationBar from './components/NavigationBar';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br></br>
      <Body1 />
      <br></br>
      <Body2 />
      <br></br>
      <Body3 />
      <br></br>
      <Body4 />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
