const path = require('path');

module.exports = {
  extensions: ['.ts', '.tsx', '.js'],
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  alias: {
    'react-dom': '@hot-loader/react-dom',
    '@assets': path.resolve(__dirname, 'src', 'assets'),
    '@libs': path.resolve(__dirname, 'src', 'app', 'libs'),
    '@components': path.resolve(__dirname, 'src', 'app', 'components'),
    '@containers': path.resolve(__dirname, 'src', 'app', 'containers'),
    '@screens': path.resolve(__dirname, 'src', 'app', 'screens'),
    '@routes': path.resolve(__dirname, 'src', 'app', 'routes'),
    '@services': path.resolve(__dirname, 'src', 'app', 'services'),
  },
};
