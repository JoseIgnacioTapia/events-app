const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: 'nchmn907',
        MONGODB_PASSWORD: 'Mm5XVphIUiKfkAa7',
        MONGODB_CLUSTERNAME: 'cluster0',
        MONGODB_DATABASE: 'events',
      },
    };
  }

  return {
    env: {
      MONGODB_USERNAME: 'nchmn907',
      MONGODB_PASSWORD: 'Mm5XVphIUiKfkAa7',
      MONGODB_CLUSTERNAME: 'cluster0',
      MONGODB_DATABASE: 'events',
    },
  };
};
