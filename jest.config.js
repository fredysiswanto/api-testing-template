const config = {
  reporters: ['default', ['jest-html-reporters', { publicPath: 'reports', filename: 'report.html' }]]
};

module.exports = config;
