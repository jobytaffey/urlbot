exports.server = 'irc.freenode.org';
exports.nick = 'urlbot';
exports.options = {
    port: 6667,
    userName: 'urlbot',
    realName: 'urlbot',
    showErrors: true,
    debug: true,
    channels: ['#urlbot-test']
/*  // For SSL connections
    secure: {rejectUnauthorized:false},
    certExpired: true,
    selfSigned: true,
    password: 'letmein',
*/
};

exports.wolfram = "[CENSORED]"; // get a key at https://developer.wolframalpha.com/portal/signin.html

