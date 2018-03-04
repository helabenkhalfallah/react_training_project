I. Project Presentation : quotes social media

User share an categorized quote and other users can comment on that quote.
We can filter quotes by mood or by categorie.

User :
id
first name
last name
photo url
quotes[]

Quote:
quote id
user id
title
description
date
photo url
mood
categorie
comments []

Comment :
quote id 
comment id
text
date
appreciation 


mood : happy, sad, crying, smile.
categorie : work, motivation, inspiration, art, science, ...
appreciation : excellent, good, medium, not bad, bad.

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


