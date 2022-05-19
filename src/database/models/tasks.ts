'use strict';

import { Model } from'sequelize';

interface TaksInterface {
  id: number,
  task: string,
  status: string,
}

// using ANY because the code is comimg from a trusted external library.
module.exports = (sequelize: any, DataTypes: any) => {
  class Task extends Model<TaksInterface> implements TaksInterface{
    id!: number;
    task!: string;
    status!: string;
    static associate(models: any) {
      // define association here
    }
  }
  Task.init({
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Tasks',
  });
  return Task;
};