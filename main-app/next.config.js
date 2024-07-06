// import { PHASE_PRODUCTION_BUILD } from 'next/constants';

// /** @type {import('next').NextConfig} */

// const nextConfig = (phase) => {
//     if (phase === PHASE_PRODUCTION_BUILD) {        
//         return {
//             output: 'export',
//             trailingSlash: true,
//             basePath: "/cleaning",
//         }
//     }    
// }

// export default nextConfig;

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