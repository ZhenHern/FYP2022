module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'bakeryshop',
        user: process.env.DB_USER || 'bakeryshop',
        password: process.env.DB_PASS || 'bakeryshop',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storageL: "./bakeryshop.sqlite"
        }
    }
}