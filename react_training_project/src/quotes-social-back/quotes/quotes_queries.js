import gql from 'graphql-tag';

export default {

  // get all quotes
  getQuotes: gql`query QuoteListQuery {
    quotes {
        id,
        date,
        author,
        description,
        photo_url,
        mood_id,
        category_id,
        comment_ids
      }
    }`,
};
