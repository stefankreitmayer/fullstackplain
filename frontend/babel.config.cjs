module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    function() {
      return {
        visitor: {
          MetaProperty(path) {
            if (
              path.node.meta &&
              path.node.meta.name === 'import' &&
              path.node.property &&
              path.node.property.name === 'env'
            ) {
              path.replaceWithSourceString('process.env');
            }
          },
        },
      };
    },
  ],
};

