const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req.headers)
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'tokenLoginPrestaServ');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
          throw 'Sessão inválida, favor fazer o login novamente.';
        } else {
          next();
        }
      } catch {
        res.status(401).json({
          error: new Error('Invalid request!')
        });
      }
    
} 