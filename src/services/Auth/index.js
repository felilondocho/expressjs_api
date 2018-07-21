import jwt from 'jsonwebtoken';

export default class Auth {

  authenticate(token) {
    if (!token) {
      return { status: 401, error: "Empty Token" };
    }

    token = token.replace('Bearer ', '');

    try {
      jwt.verify(token, 'test_password');
      return ({ status: 200 }); 
    } catch(err) {
      return ({ status: 401, error: 'Invalid Token' });
    }
  }

}