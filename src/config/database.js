import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import configdb from './configdb'

let database = null;

const loadModels = (sequelize) => {
  const dir = path.join(__dirname,'../models');
  let models = [];
  fs.readdirSync(dir).forEach( (file) => {
    const modelDir = path.join(dir,file);
    const model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  return models;
};

export default () => {

  if(!database) {
    const sequelize = new Sequelize(
      configdb.database,
      configdb.username,
      configdb.password,
      configdb.params
    );

    database = {
      sequelize,
      Sequelize,
      models: {}
    }

    database.models = loadModels(sequelize);

    sequelize.sync().done( () => {
      return database;
    });

  }

  return database;
}