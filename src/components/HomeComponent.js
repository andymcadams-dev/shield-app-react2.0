import React from 'react';


function Home(props) {
    return (
        <div className="container">
          <div className="row">
            <div className="col titlecol">
              <h1>S.H.I.E.L.D.</h1>
              <h4 className="mainh4">The ability to grade game film from anywhere</h4>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col col-4">
                <h3>Gone are the days of massive spreadsheets</h3>
                <p>No more having to Google hvlookup. </p>
                <p>No more waiting on other coaches to enter their play grades.</p>
                <p>No more emailing in spreadsheets to be copy and pasted to the master.</p>
              </div>
              <div className="col col-6">
                <img src="/assets/FilmGradeSpreadsheet.png" height="100%" width="100%" alt="phone" />
              </div>
            </div>
            <div className="row">
              <p> </p>
            </div>
            <div className="row">
              <div className="col col-6">
                <img src="/assets/TextSimulator.png" height="75%" width="75%" alt="phone" />
              </div>
              <div className="col col-4">
                <h3>Notify your players upon publishing grades</h3>
                <p>As soon as you hit submit, S.H.I.E.L.D. compiles all the data 
                and reports back to you the breakdown in a dashboard.</p>
                <p>
                You have the ability to look at scores by total defense, position group,
                per player, and then once you have verified the reporting looks correct, 
                you simply select publish, and players are notified that they can check 
                the S.H.I.E.L.D. app for their game grades. 
                </p>
              </div>
              <div className="col">
              </div>
            </div>
          </div>
      </div>        
    )
}

export default Home;
