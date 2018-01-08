module.exports = {
    "extends": "airbnb",
    "plugins" : [
        "react",
        "jsx-a11y",
        'import'
    ],
    "env": {
        "browser": true
      },
      "globals": {
        "fetch": true
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "no-undef": 0,
        "linebreak-style": ["error", "unix"],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/forbid-prop-types": ["off"],
        "jsx-a11y/no-autofocus": [ 0, {
            "ignoreNonDOM": true
        }],
    }
};