// react
import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { PropTypes } from 'prop-types';

// general import


// UI
import QuoteDetailsComponent from '../components/QuoteDetailsComponent';
import QuotesListFilterComponent from '../components/QuotesListFilterComponent';
import QuotesListComponent from '../components/QuotesListComponent';
import QuotesListToolsComponent from '../components/QuotesListToolsComponent';
// import QuotesDragListComponent from '../components/QuotesDragListComponent';

// gql
// import QuoteQueries from '../../../quotes-social-back/quotes/quotes_queries';

class QuotesListPage extends Component {
  // propsType (validation)
  static propTypes = {
    /* data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      // This corresponds with the 'quotes' field in the 'QuoteListQuery'
      quotes: PropTypes.arrayOf(PropTypes.object),
    }).isRequired, */
  };

  /* <ul>
          {data.quotes.map(quote => (
            <li key={quote.id}>
              {quote.date} - {quote.author} - {quote.description}
            </li>
          ))}
        </ul> */


  // life cycle
  componentDidMount() {}

  render() {
    /* const {
      data,
    } = this.props;
    console.log('datax : ', data);

    if (data.loading) {
      console.log('loading : ', data.loading);
      return (<div>Loading</div>);
    }

    if (data.error) {
      console.log('error : ', data.error);
      return (<div>An unexpected error occurred</div>);
    } */

    // render
    return (
      <div>
        <QuotesListToolsComponent />
        <QuotesListFilterComponent />
        <QuotesListComponent />
        <QuoteDetailsComponent />
      </div>
    );
  }
}

// export default graphql(QuoteQueries.getQuotes)(QuotesListPage);
export default QuotesListPage;
