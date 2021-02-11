const jw = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

class generatorToken {
    public generatorToken(params = {}) {
        return jw.sign(params, authConfig.secret, {
            expiresIn: 86400000
        });
    }
}

export default new generatorToken();