const {fork} = require('child_process');

const runDirectory = async (path, ...args) => {
    const runPath = `${process.cwd()}/${path}`;
    return await execute(runPath, ...args);
};

const execute = async (
    runPath,
) => {
    const stepDirectory = __dirname + '/steps/';
    const command = `./node_modules/.bin/cucumber-js`;
    const runArgs = [`${runPath}`, `-r ${stepDirectory}`];

    const cucumberProcess = fork(command, runArgs, {
        silent: true,
        cwd: __dirname,
        env: {
            ...process.env,
        }
    });

    console.log('Running the following command: \n\n', `${command} ${runArgs.join(' ')}\n\n`)

    cucumberProcess.stdout.pipe(process.stdout);
    cucumberProcess.stderr.pipe(process.stderr);
};

runDirectory(
    'feature',
);