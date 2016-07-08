import React from 'react';
import {connect} from 'react-redux';
import Stream from './presenter';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

function mapStateToProps(state){
    const tracks = state.track;
    return {
        tracks
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);