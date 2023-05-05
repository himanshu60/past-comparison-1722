import logo from './logo.svg';
import './App.css';
import Time_Styler from './Components/Time_Styler';
import Navbar from './Components/Navbar';
import View_appointment from './Components/view_appointment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Time_Styler />
        <View_appointment />
      </header>
    </div>
  );
}

export default App;
