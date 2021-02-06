const jw = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

class generatorToken {
    public generatorToken(params = {}) {
        return jw.sign(params, authConfig.secret, {
            expiresIn: 8564
        });
    }
}

export default new generatorToken();