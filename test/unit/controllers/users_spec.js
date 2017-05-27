import UsersController from '../../../src/controllers/users';
import sinon from 'sinon';

describe('Controllers: Users', () => {
  
  const Users = app.database.models.Users;
  
  const defaultUser = [{
    name: 'Marlon',
    email: 'teste@mail.com',
    password: '123456'
  }];
  
  describe('get() users', () => {
    it('should call send with a list of users', () => {

      const request = {};
      const response = {
        send: sinon.spy()
      }

      Users.findAll = sinon.stub();

      Users.findAll.withArgs({}).resolves(defaultUser);

      const usersController = new UsersController(Users);

      return usersController.get(request, response)
        .then( () => {
          sinon.assert.calledWith(response.send, defaultUser);
        });

    });

    it('should return 400 when an error occurs', () => {
      
      const request = {};

      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      };

      response.status.withArgs(400).returns(response);

      Users.findAll = sinon.stub();
      Users.findAll.withArgs({}).rejects({ message: 'Error' });

      const usersController = new UsersController(Users);

      return usersController.get(request, response)
        .then( () => {
          sinon.assert.calledWith(response.send, 'Error');
        });

    });

  });
});