describe('Routes: Users', () => {
  
  const Users = app.database.models.Users;

  const defaultUser = {
    id: 1,
    name: 'Marlon',
    email: 'teste@mail.com',
    password: '123456'
  };

  beforeEach(done => {
    Users
      .destroy({where: {}})
      .then(() => Users.create(defaultUser))
      .then(() => {
        done();
      });
  });


  describe('GET /users', () => {
    it('should return a list of users', done => {

      request
        .get('/users')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultUser.id);
          expect(res.body[0].name).to.be.eql(defaultUser.name);
          expect(res.body[0].email).to.be.eql(defaultUser.email);
          done(err);
        })
    });
  });

});