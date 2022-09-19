module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: dataTypes.INTEGER
        },
        updated_at: {
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.INTEGER
        },
        last_name: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.INTEGER
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config)

    return Actor
}