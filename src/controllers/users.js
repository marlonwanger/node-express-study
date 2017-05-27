class UsersController {

  constructor(User) {
    this.user = User;
  }

  get(req,res) {
    return this.user.findAll({})
      .then(users => res.send(users))
      .catch(err => res.status(400).send(err.message));
  }

}

export default UsersController;