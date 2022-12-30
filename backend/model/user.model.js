module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email:Sequelize.STRING(100),
        name: Sequelize.STRING(100),
        password: Sequelize.STRING(100)
    }, {
        timestamps: false
    });
    return User;
};
