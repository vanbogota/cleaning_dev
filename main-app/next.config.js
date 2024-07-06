const { PHASE_PRODUCTION_BUILD } = require('next/constants')
 
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
        output: 'export',
        trailingSlash: true,
        basePath: "/cleaning",
    }
  }
  return defaultConfig
}