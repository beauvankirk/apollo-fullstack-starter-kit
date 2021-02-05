const config = {
  __SSR__: (process.env.SSR || 'false') === 'true'
};

module.exports = config;
