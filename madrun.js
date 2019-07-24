'use strict';

const {run} = require('madrun');

module.exports = {
    'start': () => 'node bin/console',
    'start:dev': () => 'NODE_ENV=development npm start',
    'build-progress': () => 'webpack --progress',
    'build:client': () => run('build-progress', '--mode production'),
    'build:client:dev': () => `NODE_ENV=development ${run('build-progress', '--mode development')}`,
    'build:start': () => run(['build:client', 'start']),
    'build:start:dev': () => run(['build:client:dev', 'start:dev']),
    'build': () => run('build:client*'),
    'wisdom': () => run('build'),
    'watcher': () => 'nodemon -w client -w server --exec',
    'watch:lint': () => run('watcher', '\'npm run lint\''),
    'watch:client': () => run('build:client', '--watch'),
    'watch:client:dev': () => run('build:client:dev', '--watch'),
    'lint:bin': () => 'eslint -c .eslintrc.server --rule \'no-console:0\' bin',
    'lint:server': () => 'eslint -c .eslintrc.server server madrun.js webpack.config.js',
    'lint:client': () => 'eslint -c .eslintrc.client client',
    'lint': () => run(['putout', 'lint:*']),
    'fix:lint': () => run(['putout', 'lint:*'], '--fix'),
    'putout': () => 'putout client server madrun.js webpack.config.js',
};

