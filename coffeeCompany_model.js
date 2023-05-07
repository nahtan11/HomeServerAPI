const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getLatestCoffeeCompany = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM purchases ORDER BY purchase_date DESC LIMIT 1', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getLatestCoffeeCompany
}