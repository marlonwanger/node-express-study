describe('Routes: Users', () => {
  const defaultUser = {
    name: 'Marlon',
    email: 'teste@mail.com',
    password: '123456'
  };

  describe('GET /users', () => {
    it('should return a list of users', done => {
      request
        .get('/users')
        .end((err, res) => {
          expect(res.body[0]).to.be.eql(defaultUser);
          done(err);
        })
    });
  });

});