//const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const path = require('path')


module.exports = (phase) => {
  const config = {
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
    }
  }
  // if (phase === PHASE_PRODUCTION_BUILD) {
  //   return {
  //     ...config,
  //     output: 'export',
  //     trailingSlash: true,
  //     basePath: "/cleaning",
  //   }
  // }
  return config;
}