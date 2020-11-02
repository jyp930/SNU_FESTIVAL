module.exports = {
    "env": {
        "browser": true,
        "node": true,
    },
    "extends": [
        "airbnb",
        "plugin:react-hooks/recommended",
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "arrow-parens": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/media-has-caption": 0,
        "react/button-has-type": 0,
        "no-use-before-define": 0,
        "react/jsx-props-no-spreading": 0,
        "comma-dangle": 1,
        "no-unused-vars": 1,
        "react/no-array-index-key": 1,
        "react/prop-types" : 1,
        "import/no-named-default": 1,
    },
};
