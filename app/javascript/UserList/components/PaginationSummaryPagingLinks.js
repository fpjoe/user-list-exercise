import React from 'react';
import PropTypes from 'prop-types';

class PaginationSummaryPagingLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePaginationLinkClick = (e) => {
	e.preventDefault();
    var page = e.target.id.match(this.props.linkIdPrefix + '_page_(\\d+)').slice(1)[0];
  	this.props.handlePaginationLinkClick(page);
  }

  render() {

    const { paginationInfo,
		    currentPage,
		    linkIdPrefix,
		    mode } = this.props;

	const listPages = paginationInfo.pages.map((page, index) => (
      <span key={index}>
	    { ( index > 0 ) && (
	  	  <span className="sep"> | </span>
	    )}
		{( page == currentPage ) ? (
		  <span className="pagination_summary_page_selected">{page}</span>
		) : (
          <a href="#" onClick={this.handlePaginationLinkClick} id={`${linkIdPrefix}_page_${page}`}>{page}</a>
		)}
      </span>
	));

	return (
      <div>
		{ ( paginationInfo.pages.length > 1 ) && (
		  <div className="pagination_summary_paging_links">
            Page: <span className="text_right">{listPages}</span>
	        { ( mode == 'loading' ) && (
	          <span className="notice_inline text_way_right">
	            Loading...
	          </span>
	        )}
	      </div>
		)}
      </div>
    );
  };
};

PaginationSummaryPagingLinks.propTypes = {
  paginationInfo: PropTypes.object.isRequired,
  currentPage: PropTypes.string.isRequired,
  linkIdPrefix: PropTypes.string.isRequired,
  mode: PropTypes.string,
  handlePaginationLinkClick: PropTypes.func.isRequired
};

export default PaginationSummaryPagingLinks;
