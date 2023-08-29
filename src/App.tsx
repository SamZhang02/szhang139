import './App.css';
import { Projects } from './components/Projects'
import { TrademarkBar } from './components/TrademarkBar';
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { TimelinePage } from './components/TimelinePage'

function App() {
  return (
    <div
      className="App z-10">
      <Cursor />
      <Navbar />
      <Header />
      <TimelinePage />
      <Projects />
      <TrademarkBar />
    </div>
  );
}


export default App;
