import React from 'react';
import {connect} from 'react-redux';

const Home = ({greetings}) => {
  return (
    <div>
      <div>主页</div>
      <div>{greetings}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({greetings: state.greetings});

export default connect(mapStateToProps)(Home);
