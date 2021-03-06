const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'context': path.resolve(__dirname, 'src/context'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'images': path.resolve(__dirname, 'src/resources/images'),
    }
  },
};