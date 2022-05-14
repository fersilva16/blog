module.exports = {
  input: ['src/**/*.{ts,tsx}', '!node_modules/**'],
  output: 'src/locales',
  options: {
    debug: false,
    removeUnusedKeys: false,
    sort: true,
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    trans: false,
    lngs: ['en', 'pt'],
    ns: ['messages'],
    defaultLng: 'en',
    defaultNs: 'messages',
    defaultValue: function (lng, _, key) {
      if (lng === 'en') return key;

      return '__STRING_NOT_TRANSLATED__';
    },
    resource: {
      loadPath: '{{lng}}.json',
      savePath: '{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    formatSeparator: '.',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  verbose: true,
};
