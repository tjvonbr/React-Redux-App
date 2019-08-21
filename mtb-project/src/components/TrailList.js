import React from 'react';
import Trail from './Trail';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions/trailListActions';

const TrailList = props => {
  return (
    <div className="trail-list">
      <button className="btn fetch-btn"
              onClick={props.getData}
      >
        {props.isLoading ? 
          <Loader
            type="watch"
            color="#00BFFF"
            height="25"
            width="25"
        /> :
        'Show me my options!'}
      </button>
      {props.trails.map(trail => (
        <Trail trail={trail}/>
      ))}
    </div>  
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    trails: state.trails
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(TrailList);