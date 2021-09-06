import React, { Component } from 'react';
import GamesInfo from './GamesComponent';
import Directory from './DirectoryComponent';
//import Player from './PlayerComponent';
//import Scorecard from './ScorecardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { GAMES } from '../shared/games';
import { Switch, Route, Redirect } from 'react-router-dom';
//import { PLAYER } from '../shared/player';
//import { SCORECARD } from '../shared/scorecard';

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
    
        const GamesWithId = ({match}) => {
            return(
                <GamesInfo
                game={this.state.games.filter(game => game.id === +match.params.gameId)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path= '/directory' render={() => <Directory games={this.state.games} />} />
                    </Switch>
                    <Footer />
            </div>
        );
      }  
    }

export default Main;