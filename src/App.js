
import './App.css';
import GetData from './Components/GetData/GetData';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className='App'>
        <Header/>
         <GetData/>
         <Question></Question>         
    </div>
  );
}

export default App;
