module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        productCode: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        productName: Sequelize.STRING(100),
        productBrand:Sequelize.STRING(100),
        productDescription:Sequelize.STRING(500),
        productPrice:Sequelize.INTEGER,
        // productImage:Sequelize.BLOB
        productImage:Sequelize.STRING(1000)
    }, {
        timestamps: false
    });
    return Product;
};
