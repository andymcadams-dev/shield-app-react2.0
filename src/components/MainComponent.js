import React, { Component } from 'react';
import Directory from './DirectoryComponent';
//import Player from './PlayerComponent';
//import Scorecard from './ScorecardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { GAMES } from '../shared/games';
import { Switch, Route } from 'react-router-dom';
//import { PLAYER } from '../shared/player';
import Scorecard from './ScorecardComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: GAMES,
            //player: PLAYERS,
            //scorecard: SCORECARDS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                games={this.state.games.filter(games => games.featured)[0]}
                //player={this.state.player.filter(player => player.featured)[0]}
                //scorecard={this.state.scorecard.filter(scorecard = scorecard.featured)[0]}
                />
            );
        }
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path= '/directory' render={() => <Directory games={this.state.games} />} />
                        <Route path='/Scorecard' component={Scorecard} />
                    </Switch>
                <Footer />
            </div>
        );
      }  
    }

export default Main;