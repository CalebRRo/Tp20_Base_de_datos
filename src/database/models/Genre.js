module.exports = (sequelize, dataTypes) => {

    const alias = "Genre";

    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name:{
            type: dataTypes.STRING(100),
            allowNull: false,
          },
          rating:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
          },
          active:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: "1",
          },
    };

    const config = {

        tableName : "genres",
        timestamps : true,
        underscored : true
    }

    const Genre = sequelize.define(alias,cols,config)

    return Genre
}

/* 'use strict';

module.exports = (sequelize, DataTypes) => {
    const cols ={
         id: {
            type:DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          nombre: {
type: DataTypes.STRING(200),
      allowNull: false,
          },
          descripcion: {
type: Datatypes.TEXT,
allowNull: false,
          },
          precio: {
type: Datatypes.DECIMAL,
allowNull: false,
          }
    };
     const config = {

        tableName : "productos",
        timestamps : true,
        underscored : true
    }
    const product = sequelize.define('Product',cols,config);
 	return product;
}; */

