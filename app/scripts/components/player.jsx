import React from 'react';


export default class Player extends React.Component{
  constructor(props){
    super(props);
      this.data = props.data;
      this.pos = props.data.pos;
      this.projectedStats = props.data.projectedStats;
      this.dfsSite = 'DRAFTKINGS';
      this.state = {
          min: this.data.projectedStats.minutes.default,
          ur:this.data.projectedStats.usageRate.default,
          rr:this.data.projectedStats.reboundRate.default,
          ar:this.data.projectedStats.assistsRate.default,
          man_ea:this.data.manualEffAdj.new,
          proj:this.data.draftkings.projection.new
        }
      }
    calculateProj(){
        let min = parseFloat(this.refs.min.value),
            ur = parseFloat(this.refs.ur.value),
            rr = parseFloat(this.refs.rr.value),
            ar = parseFloat(this.refs.ar.value),
            man_ea = parseFloat(this.refs.man_ea.value),
            max_r = Math.max(ur, rr, ar);
        const proj = min * man_ea * (ur+rr+ar) / 3 / max_r;
        if(!isNaN(proj)){
            this.setState({
                proj:proj
            });
        }
    }
    componentDidUpdate(){
    }
  render(){
      let self = this;
      return(
          <tr>
              <td></td>
              <td></td>
              <td>{this.data.player}</td>
              <td>{this.pos.draftkings}</td>
              <td>{this.data.team}</td>
              <td>{this.data.opp}</td>
              <td><input type="text" defaultValue={this.data.effectivePos.new}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="min" type="text" defaultValue={this.data.projectedStats.minutes.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="ur" type="text" defaultValue={this.data.projectedStats.usageRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="rr" type="text" defaultValue={this.data.projectedStats.reboundRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="ar" type="text" defaultValue={this.data.projectedStats.assistsRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="man_ea" type="text" defaultValue={this.data.manualEffAdj.new}/></td>
              <td>{this.state.proj}</td>
              <td>{this.dfsSite}</td>
              <td>{this.data.draftkings.salary}</td>
              <td>{this.data.draftkings.valueTreshold}</td>
              <td>{this.data.draftkings.value.new}</td>
          </tr>
      )
  }
};