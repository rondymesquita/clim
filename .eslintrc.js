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
        'no-underscore-dangle': [
            'off'
        ],
        'no-restricted-syntax': [
            'off',
            'ForInStatement',
            'ForOfStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        "class-methods-use-this": [
            'off'
        ]
    }
};
