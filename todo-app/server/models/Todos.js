const Todos = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
        'todos',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            tableName: 'todos',
            freezeTableName: true,
            timestamps: false,
        }
    )

    return model;
}

module.exports = Todos;