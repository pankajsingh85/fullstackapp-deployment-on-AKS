module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define("service", {
        pinCode: Sequelize.INTEGER,
        productCode: Sequelize.INTEGER,
        quantity:Sequelize.INTEGER
    }, {
        timestamps: false
    });
    return Service;
};
