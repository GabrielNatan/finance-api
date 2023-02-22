const db = require('../../database');

class CustomerRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM customer;');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM customer WHERE id = $1;', [id]);
    return row;
  }
}

module.exports = new CustomerRepository();
