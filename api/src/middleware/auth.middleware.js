const jwt = require('jsonwebtoken');

<<<<<<< HEAD
function auth(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não informado' });
  }

  const token = authorization.split(' ')[1];
=======
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token nÃ£o fornecido' });
  }

  const token = header.split(' ')[1];
>>>>>>> upstream/main

  try {
    req.empresa = jwt.verify(token, process.env.JWT_SECRET);
    next();
<<<<<<< HEAD
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

module.exports = auth;
=======
  } catch {
    return res.status(401).json({ erro: 'Token invÃ¡lido ou expirado' });
  }
}

module.exports = authMiddleware;
>>>>>>> upstream/main
