const Pusher = require('pusher');
const compilerun = require('compile-run');

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_AP_CLUSTER,
    useTLS: true
});

module.exports = {
    compileCode: (req, res, next) => {
        const sourceCode = req.body.sourceCode;
        console.log('Params=>', req.params)
        const compileResultPromise = compilerun[req.params.language].runSource(sourceCode);
        compileResultPromise.then(result => res.send(result))
            .catch(err => res.send(err));
    },

    updateEditor: (req, res, next) => {
        console.log(req.body);
        pusher.trigger('editor', 'text-update', {
            ...req.body,
        });
        res.status(200).send('OK');
    }
}