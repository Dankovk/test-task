import App from './pages/app.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/ActionCreators';

function mapStateToProps(state){
    return{
        data: state.data,
        sortTable: state.sortTable
    }
};
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const Application = connect(mapStateToProps, mapDispatchToProps)(App);

export default Application;