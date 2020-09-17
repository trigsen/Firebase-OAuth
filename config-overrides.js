const path = require('path');
const {alias} = require('react-app-rewire-alias')

module.exports = function (config, env) {
    // config.resolve = {
    //     ...config.resolve,
    //     alias: {
    //         ...config.resolve.alias,
    //         '@': path.resolve(__dirname, './src'),
    //     },
    // }
    alias({
        '@': path.resolve(__dirname, './src')
    })(config);
    return config
}
