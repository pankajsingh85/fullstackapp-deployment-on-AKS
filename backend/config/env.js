module.exports = {
    database: process.env.DB_DATABASE || "exit_test",
    username:  process.env.DB_USER || "root",
    password:  process.env.DB_PASSWORD || "root1234",
    // host: "db",
    host:process.env.DB_HOST|| "db",
    port:3306,
    dialect: "mysql"
};



