import React from 'react';

import Player from '../components/player.jsx';


class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.players = this.props.data.players;
    
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    let players = this.players.map((item, i)=>{
      return(
        <Player key={i} data={this.players[i]}/>
      )
    });

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                <tr>
                  <th>LOCK</th>
                  <th>TARGET</th>
                  <th>PLAYER</th>
                  <th>POS</th>
                  <th>TM</th>
                  <th>OPP</th>
                  <th>EFF POS</th>
                  <th>MIN</th>
                  <th>UR</th>
                  <th>RR</th>
                  <th>AR</th>
                  <th>MAN EA</th>
                  <th>PROJ.</th>
                  <th>DFS SITE</th>
                  <th>SAL</th>
                  <th>VAL THR</th>
                  <th>VAL</th>
                </tr>
                </thead>
                <tbody>
                  {players}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;