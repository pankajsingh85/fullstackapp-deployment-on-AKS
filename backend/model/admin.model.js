module.exports = (sequelize, Sequelize) => {
    const Admin= sequelize.define("admin", {
        name: Sequelize.STRING(100),
        password: Sequelize.STRING(100)
    }, {
        timestamps: false
    });
    return Admin;
};
