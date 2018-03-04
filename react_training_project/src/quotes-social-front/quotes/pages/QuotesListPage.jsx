import React, { Component } from 'react';
import QuoteDetailsComponent from '../components/QuoteDetailsComponent';
import QuotesFilterComponent from '../components/QuotesFilterComponent';
import QuotesListComponent from '../components/QuotesListComponent';
// import QuotesDragListComponent from '../components/QuotesDragListComponent';

class QuotesListPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <QuotesFilterComponent />
        <QuotesListComponent />
        <QuoteDetailsComponent />
      </div>
    );
  }
}

export default QuotesListPage;
