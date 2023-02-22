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

  async create({
    name, lastName, password, hash,
  }) {
    const [row] = await db.query(`
        INSERT INTO customer(name,last_name,password,key_hash)
        VALUES($1,$2,$3,$4)
        RETURNING *;
    `, [name, lastName, password, hash]);

    return row;
  }

  async update(id, {
    name, lastName, password, hash,
  }) {
    const [row] = await db.query(`
        UPDATE customer
        SET name = $1,
        last_name = $2,
        password = $3,
        key_hash = $4
        WHERE id = $5
        RETURNING *;
    `, [name, lastName, password, hash, id]);

    return row;
  }

  async delete(id) {
    await db.query('DELETE FROM customer WHERE id = $1', [id]);
  }
}

module.exports = new CustomerRepository();
