var Shops = Sequelize.define('Shops', {
    name : Sequelize.STRING,
    email: Sequelize.STRING,
    deletedAt : Sequelize.DATE
});