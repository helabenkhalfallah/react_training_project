I. Project Presentation : quotes social media

User share an categorized quote and other users can comment on that quote.
We can filter quotes by author or by mood or by category.
We can order quotes by author name or by date (desc & asc).
We can show quote author profile.
We can show quote user profile.

User :
id
first name
last name
photo url
quote_ids

Quote:
id
author_id
description
date
photo url
mood_id
category_id
comment_ids

Author
id
first name
last name
birthday
description

Comment :
id
text
date
appreciation_id

Mood
id
mood name
mood picto

Category
id
category name
category description

Appreciation
appreciation id
appreciation name
appreciation picto

mood : angry, cry, love, sad, smile, happy.
category : work, motivation, inspiration, art, science, programming ...
appreciation : excellent, good, not bad, bad.

II. Technologies :

Firstly we will use json-web-server after we use a gql server+mongo.
Apollo
gql
Apollo link state
semantic-ui (react)


III. setup:

1. npx create-react-app react_training_project
2. configure lint (airbnb) 
yarn add babel-eslint
yarn add eslint-config-airbnb --dev
yarn add eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --dev
yarn add eslint-config-airbnb-base eslint-loader eslint-plugin-flowtype --dev 
3. eslint init
4. this will create .eslintrc.js file
5. add this configure to .eslintrc
6. enable on VS settings "eslint.autoFixOnSave": true, for auto fix lint error.


