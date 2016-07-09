import React from 'react';

export default class Player extends React.Component{
  constructor(props){
    super();
      this.data = props.data;
      this.pos = props.data.pos;
      this.projectedStats = props.data.projectedStats;
      this.dfsSite = 'DRAFTKINGS';
  }

  render(){
      return(
          <tr>
              <td></td>
              <td></td>
              <td>{this.data.player}</td>
              <td>{this.pos.draftkings}</td>
              <td>{this.data.team}</td>
              <td>{this.data.opp}</td>
              <td><input type="text" defaultValue={this.data.effectivePos.new}/></td>
              <td><input type="text" defaultValue={this.data.projectedStats.minutes.default}/></td>
              <td><input type="text" defaultValue={this.data.projectedStats.usageRate.default}/></td>
              <td><input type="text" defaultValue={this.data.projectedStats.reboundRate.default}/></td>
              <td><input type="text" defaultValue={this.data.projectedStats.assistsRate.default}/></td>
              <td><input type="text" defaultValue={this.data.manualEffAdj.new}/></td>
              <td>{this.data.draftkings.projection.new}</td>
              <td>{this.dfsSite}</td>
              <td>{this.data.draftkings.salary}</td>
              <td>{this.data.draftkings.valueTreshold}</td>
              <td>{this.data.draftkings.value.new}</td>
          </tr>
      )
  }
};