const babelJest = require('babel-jest');

module.exports = {
  process(src, filename, config, transformOptions) {
    // Replace import.meta.env with process.env before Babel processes it
    const transformedSrc = src.replace(
      /import\.meta\.env/g,
      'process.env'
    );
    
    // Use babel-jest's default transformer
    const transformer = babelJest.createTransformer();
    return transformer.process(transformedSrc, filename, config, transformOptions);
  },
  getCacheKey(src, filename, config, transformOptions) {
    const transformer = babelJest.createTransformer();
    return transformer.getCacheKey(src, filename, config, transformOptions);
  },
  getCacheKeyAsync(src, filename, config, transformOptions) {
    const transformer = babelJest.createTransformer();
    return transformer.getCacheKeyAsync(src, filename, config, transformOptions);
  },
};

