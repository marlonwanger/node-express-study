class UsersController {

  get(req,res) {
    return res.send([{
      name: 'Marlon',
      email: 'teste@mail.com',
      password: '123456'
    }]);
  }

}

export default UsersController;