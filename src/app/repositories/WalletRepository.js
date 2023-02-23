const db = require('../../database');

class WalletRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM wallet;');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM wallet WHERE id = $1;', [id]);
    return row;
  }

  async create({
    balance, customerId,
  }) {
    const [row] = await db.query(`
        INSERT INTO wallet(balance,customer_id)
        VALUES($1,$2)
        RETURNING *;
    `, [balance, customerId]);

    return row;
  }

  async delete(id) {
    await db.query('DELETE FROM wallet WHERE id = $1', [id]);
  }
}

module.exports = new WalletRepository();
