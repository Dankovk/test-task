import React from 'react';
import numeral from 'numeral';


class RangeSlider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            min: props.min,
            max: props.max,
            minElement: null,
            maxElement: null,
            minRange: props.minRange || 500
        };
    }
    componentDidMount() {
        var min = this.props.minValue || this.props.min;
        var max = this.props.maxValue || this.props.max;
        this.state.minElement.value = min;
        this.state.maxElement.value = max;
        this.setState({min: min, max: max});
    }
    componentWillReceiveProps(props) {
        var min = this.props.minValue || this.props.min;
        var max = this.props.maxValue || this.props.max;
        this.state.minElement.value = min;
        this.state.maxElement.value = max;
        this.setState({min: min, max: max});
    }
    render() {
        var ret = (
            <div style={this.props.style} className={this.props.className + ' W(100%)'}>
                <div className="range-values">
                    <div className="range-min-value D(ib) C(#4e5b65)">
                        {numeral(this.state.min).format('$0,0')}
                    </div>
                    <div className="range-max-value D(ib) Fl(end) C(#4e5b65)">
                        {numeral(this.state.max).format('$0,0')}{(this.props.max === this.state.max) ? '+' : ''}
                    </div>
                </div>
                <div
                    style={this.props.style}
                    className={this.props.ClassName + ' range-slider Pos(r) Ta(c) H(35px)'}>
                    <input
                        onChange={
                            (ev)=>{
                                if(ev.target.value < this.state.max - this.state.minRange) {
                                    this.setState(
                                        {min: parseInt(ev.target.value)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                                else {
                                    this.state.minElement.value = this.state.min;
                                    this.setState(
                                        {min: parseInt(this.state.min)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                            }
                        }
                        ref={(el)=>{this.state.minElement = el}}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        type="range"
                    />
                    <input
                        onChange={
                            (ev)=>{
                                if(ev.target.value > this.state.min + this.state.minRange) {
                                    this.setState(
                                        {max: parseInt(ev.target.value)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                                else {
                                    this.state.maxElement.value = this.state.max;
                                    this.setState(
                                        {max: parseInt(this.state.max)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                            }
                        }
                        ref={(el)=>{this.state.maxElement = el}}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        type="range"
                    />
                    <div style={{
                            position: 'absolute',
                            boxSizing: 'border-box',
                            width: '100%',
                            paddingLeft: '8px',
                            paddingRight: '8px',
                            top: '26px',
                            left:'0'
                        }}>
                        <div style={{
                            marginLeft: (this.state.min - this.props.min)/(this.props.max - this.props.min)*100 + '%',
                            width: (100-(this.state.min - this.props.min + this.props.max - this.state.max)/(this.props.max - this.props.min)*100) + '%',
                            height: '4px',
                            backgroundColor: '#5FCCC7'
                        }}></div>
                    </div>
                </div>
            </div>
        );
        return ret;
    }
}

export default RangeSlider;
