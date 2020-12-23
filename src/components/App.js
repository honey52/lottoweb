import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppShell from './Appshell';
import Home from './Home';
import Lottos from './Lottos';
import MakeBall from './MakeBall';
import Withdrawal from './Withdrawal';
import MyBall from './MyBall';
import '../index.css';
import './ball.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/lottos" component={Lottos}/>
                        <Route exact path="/makeBall" component={MakeBall}/>
                        <Route exact path="/withdrawal" component={Withdrawal}/>
                        <Route exact path="/myBall" component={MyBall}/>
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;