module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": ["App.js", "index.js", ".jsx"] }],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ]
    }
};