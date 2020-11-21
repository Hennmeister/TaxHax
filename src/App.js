import logo from './logo.svg';
import './App.css';
import LandingPage from './landing_page/LandingPage';
import TaxQuiz from './tax_quiz/TaxQuiz';
import TaxInfo from './tax_info/TaxInfo'
import { Route, Switch, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/tax-quiz" component={TaxQuiz}></Route>
        <Route path="/tax-info" component={TaxInfo}></Route>
        <Route path="/" exact component={LandingPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
