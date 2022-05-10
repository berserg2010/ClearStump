module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration'],
      },
    ],
  },
};
