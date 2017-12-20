
import React from 'react';
import PropTypes from 'prop-types';

// import TagCount from './generators/TagCount';

import RecursiveDivs from './generators/RecursiveDivs';

class Count extends React.Component {

  render() {
    const count = this.props.params.count || 22;
    const depth = this.props.params.depth || 4;
    return (
        <RecursiveDivs breadth={parseInt(count, 10)} depth={parseInt(depth, 10)} />
      );
  }
}

export default Count;
