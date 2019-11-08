import React from 'react';
import PropTypes from 'prop-types';

class PaginationSummaryNumResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { paginationInfo,
		    entityName,
		    marginTop,
            marginBottom } = this.props;

	return (
      <div>
		{ ( paginationInfo.pages.length > 1 ) && (
		  <div className="pagination_summary_num_results" style={{marginTop: marginTop, marginBottom: marginBottom}}>
            Showing {paginationInfo.numStart} - {paginationInfo.numEnd} of {paginationInfo.numTotal} total {entityName}s.
	      </div>
		)}
      </div>
    );
  };
};

PaginationSummaryNumResults.defaultProps = {
  marginTop: 0,
  marginBottom: 20
};

PaginationSummaryNumResults.propTypes = {
  paginationInfo: PropTypes.object.isRequired,
  entityName: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

export default PaginationSummaryNumResults;
