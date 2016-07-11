import React from 'react';


export default class Player extends React.Component{
  constructor(props){
    super(props);
      this.data = props.data;
      this.pos = props.data.pos;
      this.projectedStats = props.data.projectedStats;
      this.dfsSite = 'DRAFTKINGS';
      this.state = {
          changed: false,
          proj:props.data[this.props.provider].projection.new
        }
      }
    defaultProj(props){
        return this.props.data.draftkings.projection.new;
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
                changed: true,
                proj:proj
            });
        }
    }
    componentDidUpdate(){
    }
  render(){
      let self = this;
      let data = this.props.data;
      let pos = data.pos;
      let projectedStates = data.projectedStats;
      let defaultProj = this.defaultProj();
      let provider = this.props.provider;
      return(
          <tr data-projection={this.props.projection} data-salary={this.props.salary}>
              <td></td>
              <td></td>
              <td>{data.player}</td>
              <td>{pos[provider]}</td>
              <td>{data.team}</td>
              <td>{data.opp}</td>
              <td><input type="text" defaultValue={data.effectivePos.new}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="min" type="text" defaultValue={data.projectedStats.minutes.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="ur" type="text" defaultValue={data.projectedStats.usageRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="rr" type="text" defaultValue={data.projectedStats.reboundRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="ar" type="text" defaultValue={data.projectedStats.assistsRate.default}/></td>
              <td><input onChange={function(){
                 self.calculateProj();
              }} ref="man_ea" type="text" defaultValue={data.manualEffAdj.new}/></td>
              <td>{ (this.state.changed)? this.state.proj : defaultProj   }</td>
              <td>{provider}</td>
              <td>{data[provider].salary}</td>
              <td>{data[provider].valueThreshold}</td>
              <td>{data[provider].value.new}</td>
          </tr>
      )
  }
};