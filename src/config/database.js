import Sequelize from 'sequelize';

let database = null;

export default (app) => {
  
  if(!database) {

    const config = app.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    database = {
      sequelize,
      Sequelize,
      models: {}
    }

    sequelize.sync().done( () => {
      return database;
    });
    
    sequelize .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


  }

  return database;
}