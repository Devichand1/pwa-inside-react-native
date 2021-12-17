module.exports = {
  // extends: '@react-native-community',
  plugins: [
    'react',
    'react-native',
    'react-hooks'
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    // 'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-color-literals': "off",
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    "prettier/prettier": "off",
    "max-len": [1, 800, 2, {
      "ignorePattern": "^import\\s.+\\sfrom\\s.+;$",
      "ignoreUrls": true
    }],
  },
  globals: {
    fetch: false
  }
};