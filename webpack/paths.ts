const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => {
    return path.resolve(appDirectory, relativePath);
};

// Config after eject: we're in ./config/
module.exports = {
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appSrc: resolveApp('src')
};