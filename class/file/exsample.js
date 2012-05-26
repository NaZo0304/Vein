var conf = {
	"table" :
	{
		"foreignKey" : { "parent" : "shops.id", "child"  : "products.shop_id" },
		"associations" : "oneToMany"
	},
	"data" : {
		"shops.shop_id" : Sequelize.INTEGER,
		"shops.name" : Sequelize.STRING,
		"shops.price" : Sequelize.INTEGER,
		"shops.tax" : Sequelize.INTEGER,
		"shops.createdAt" : Sequelize.DATE,
		"shops.updatedAt" : Sequelize.DATE,
		"shops.deletedAt" : Sequelize.DATE,
		"shops.products" : {
			"products.id" : Sequelize.INTEGER,
			"products.name" : Sequelize.STRING,
			"products.price" : Sequelize.INTEGER,
			"products.createdAt" : Sequelize.DATE,
			"products.updatedAt" : Sequelize.DATE,
			"products.deletedAt" : Sequelize.DATE
		}
	}
};