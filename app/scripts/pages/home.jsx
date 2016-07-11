import React from 'react';
import jQuery from 'jquery';
var $ = jQuery;


import Player from '../components/player.jsx';
import InputRange from 'react-input-range';


class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.players = this.props.sortTable;
    this.state = {
      sortUpToDownDirection: false,
      salaryRange: {
        min:0,
        max:15000
      },
      projectionRange: {
        min:0,
        max:100
      }
    };
  }

  //TODO optimize when salary not updated

  componentDidUpdate() {

    //UPDATING SALARY VIEW

    let self = this;
    let players = $('tr');
    players.each(function(index, elem){
      let $elem = $(elem);
        if($elem.attr('data-salary') < self.state.salaryRange.min || $elem.attr('data-salary') > self.state.salaryRange.max || $elem.attr('data-projection') < self.state.projectionRange.min || $elem.attr('data-projection') > self.state.projectionRange.max){
          $(elem).css({
            display:'none'
          })
        } else{
          $(elem).css({
            display:'table-row'
          })
        }
    });

  }


  projSort(field){

    let provider, newSortDirection, aData, bData, newSort;
    provider = this.currentProvider();

    newSortDirection = !this.state.sortUpToDownDirection;
    this.setState({sortUpToDownDirection: newSortDirection});


    function compare(a,b){

      switch(field){
        case 'proj':
          aData = a[provider].projection.new;
          bData = b[provider].projection.new;
          break;

        case 'salary':
          aData = a[provider].salary;
          bData = b[provider].salary;
          break;

        case 'player':
          aData = a.player;
          bData = b.player;
          break;

        case 'pos':
          aData = a.pos[provider];
          bData = b.pos[provider];
          break;

        case 'team':
          aData = a.team;
          bData = b.team;
          break;

        case 'oop':
          aData = a.oop;
          bData = b.oop;
          break;

        case 'thr':
          aData = a[provider].valueThreshold;
          bData = b[provider].valueThreshold;
          break;

      }

      if(aData < bData){
        return (newSortDirection) ? -1 : 1;
      }
      if(aData > bData){
        return (newSortDirection) ? 1 : -1;
      }
      return 0;

    }

    newSort = (newSortDirection) ? this.players.sort(compare) : this.players.reverse(compare);
    this.props.changeSort(newSort);

    this.forceUpdate();
  }

  changeSalary(component, values){
    this.setState({
      salaryRange: values
    });
    this.props.changeSalary(this.state.salaryRange);
  }

  changeProjection(component, values){
    this.setState({
      projectionRange:values
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onStatusChange(state) {
  }
  currentProvider (){
    let self = this;

    if (self.props.source.draftkings) {
      return 'draftkings';
    } else if(self.props.source.fanduel) {
      return 'fanduel';
    } else {
      return 'fantasyaces'
    }

  }

  render() {
    let self = this;
    let provider = self.currentProvider();
    let playersSorted = this.players.map((item, i)=>{
      return(
        <Player projection={this.players[i][provider].projection.new} salary={this.players[i][provider].salary} key={i} provider={provider} data={this.players[i]}/>
      )
    });
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="padding-div"></div>
              <label htmlFor="draftkingsFilter">Drafkings</label>
              <input id="draftkingsFilter" name="source" onChange={function(){
                self.props.changeSource({draftkings:true, fantasyaces:false, fanduel:false});
              }} type="radio" ref="draftkingsFilter"/>
              <label htmlFor="fantasyacesFilter">Fantasyaces</label>
              <input id="fantasyacesFilter" name="source"  onChange={function(){
                    self.props.changeSource({draftkings:false, fantasyaces:true, fanduel:false});

              }} type="radio" ref="fantasyacesFilter"/>
              <label htmlFor="fanduelFilter">Fanduel</label>
              <input id="fanduelFilter" name="source"  onChange={function(){
                self.props.changeSource({draftkings:false, fantasyaces:false, fanduel:true});
              }} type="radio" ref="fanduelFilter"/>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-xs-12">
                  <h3>Salary</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputRange
                      key="salary"
                      maxValue={15000}
                      minValue={0}
                      step = {1000}
                      value={self.state.salaryRange}
                      onChange={this.changeSalary.bind(this)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h2>Projection</h2>
                </div>
                <div className="col-xs-12">
                  <InputRange
                      key = 'projection'
                      maxValue={100}
                      minValue={0}
                      step = {5}
                      value={self.state.projectionRange}
                      onChange={this.changeProjection.bind(this)}
                  />
                </div>
              </div>
             <div className="row">
               <div className="col-xs-12">

               </div>
             </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="padding-div"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                <tr>
                  <th>LOCK</th>
                  <th>TARGET</th>
                  <th onClick={function(){
                    self.projSort('player');
                  }}>PLAYER</th>
                  <th onClick={function(){
                    self.projSort('pos');
                  }}>POS</th>
                  <th onClick={function(){
                    self.projSort('team');
                  }}>TM</th>
                  <th onClick={function(){
                    self.projSort('oop');
                  }}>OPP</th>
                  <th>EFF POS</th>
                  <th>MIN</th>
                  <th>UR</th>
                  <th>RR</th>
                  <th>AR</th>
                  <th>MAN EA</th>
                  <th onClick={function(){
                    self.projSort('proj');
                  }}>PROJ.</th>
                  <th>DFS SITE</th>
                  <th onClick={function(){
                    self.projSort('salary');
                  }}>SAL</th>
                  <th onClick={function(){
                    self.projSort('thr');
                  }}>VAL THR</th>
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