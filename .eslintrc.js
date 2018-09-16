module.exports = {
    "env": {
        "node": true
    },
    "extends": ["eslint:recommended", "airbnb-base"],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "array-bracket-newline": [
            "error",
            "always"
        ],
        "array-element-newline": [
            "error", "always"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-restricted-syntax': [
              'off',
              'ForInStatement',
              'ForOfStatement',
              'LabeledStatement',
              'WithStatement',
        ],
    }
};
