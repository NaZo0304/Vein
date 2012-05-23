var Products = Sequelize.define('Products', {
    name  : Sequelize.STRING,
    email : Sequelize.STRING,
    price : Sequelize.INTEGER,
    tax   : Sequelize.INTEGER,
    deletedAt : Sequelize.DATE
});