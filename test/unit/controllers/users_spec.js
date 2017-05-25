import UsersController from '../../../src/controllers/users';
import sinon from 'sinon';

describe('Controllers: Users', () => {
  
  const defaultUser = [{
    name: 'Marlon',
    email: 'teste@mail.com',
    password: '123456'
  }];
  
  describe('get() users', () => {
    it('Should return a list of users', () => {

      const request = {};
      const response = {
        send: sinon.spy()
      }

      const usersController = new UsersController();

      usersController.get(request, response);

      expect(response.send.called).to.be.true; //Verifica se a funcao send foi chamada
      expect(response.send.calledWith(defaultUser)).to.be.true; //verifica se foi chamada com o objeto fake

    });
  });
});