const babelJest = require('babel-jest').default;

module.exports = {
  process(src, filename) {
    // Replace import.meta.env with a mockable object
    const transformedSrc = src.replace(
      /import\.meta\.env/g,
      'process.env'
    );
    
    return babelJest.process(transformedSrc, filename);
  },
};

