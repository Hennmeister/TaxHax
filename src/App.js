import logo from './logo.svg'
import './App.css'
import LandingPage from './landing_page/LandingPage'
import TaxInfo from './tax_info/TaxInfo'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Particles from 'react-tsparticles'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/tax-quiz" component={TaxInfo}></Route>
                <Route path="/" exact component={LandingPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
