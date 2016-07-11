import React from 'react';

import Player from '../components/player.jsx';
import RangeSlider from '../components/range-slider';


class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.players = this.props.sortTable;
  }

  componentDidMount() {
  }
  projSort(){
    function compare(a,b){
      if(a.draftkings.projection.new < b.draftkings.projection.new){
        return -1;
      }
      if(a.draftkings.projection.new > b.draftkings.projection.new){
        return 1;
      }
      return 0;
    }
    let newSort = this.players.sort(compare);
    this.props.changeSort(newSort);
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    let playersSorted = this.players.map((item, i)=>{
      return(
        <Player  key={i} data={this.players[i]}/>
      )
    });
    let self = this;

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="draftkingsFilter">Drafkings</label>
              <input id="draftkingsFilter" name="source" onChange={function(){
                self.props.changeSource({draftkings:true, fantasyaces:false, fanduel:false})
              }} type="radio" ref="draftkingsFilter"/>
              <label htmlFor="fantasyacesFilter">Fantasyaces</label>
              <input id="fantasyacesFilter" name="source"  onChange={function(){
                self.props.changeSource({draftkings:false, fantasyaces:true, fanduel:false})
              }} type="radio" ref="fantasyacesFilter"/>
              <label htmlFor="fanduelFilter">Fanduel</label>
              <input id="fanduelFilter" name="source"  onChange={function(){
                self.props.changeSource({draftkings:false, fantasyaces:false, fanduel:true})
              }} type="radio" ref="fanduelFilter"/>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-xs-12">

                </div>
              </div>
             <div className="row">
               <div className="col-xs-12">

               </div>
             </div>
            </div>
          </div>
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
                  <th onClick={function(){
                    self.projSort();
                  }}>PROJ.</th>
                  <th>DFS SITE</th>
                  <th>SAL</th>
                  <th>VAL THR</th>
                  <th>VAL</th>
                </tr>
                </thead>
                <tbody>
                {playersSorted}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;