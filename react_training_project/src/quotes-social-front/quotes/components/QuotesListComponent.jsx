import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


const QuotesListComponent = () => (
  <div>
    <h3>Quotes List Component</h3>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name="right arrow" />
      </Button.Content>
    </Button>
  </div>
);

export default QuotesListComponent;
