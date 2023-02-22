const bcrypt = require('bcrypt');
const CustomerRepository = require('../repositories/CustomerRepository');

class CustomerController {
  async index(request, response) {
    const customers = await CustomerRepository.findAll();

    response.json(customers);
  }

  async show(request, response) {
    const { id } = request.params;
    const customer = await CustomerRepository.findById(id);

    if (!customer) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(customer);
  }

  async store(request, response) {
    const { name, lastName, password } = request.body;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (error, hash) => {
        const customer = await CustomerRepository.create({
          name, lastName, password: hash, hash: salt,
        });

        response.status(200).json(customer);
      });
    });
  }

  update(request, response) {
    const { id } = request.params;
    const { name, lastName, password } = request.body;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (error, hash) => {
        const customer = await CustomerRepository.update(id, {
          name, lastName, password: hash, hash: salt,
        });

        response.status(200).json(customer);
      });
    });
  }

  async delete(request, response) {
    const { id } = request.params;
    await CustomerRepository.delete(id);
    response.sendStatus(200);
  }
}

module.exports = new CustomerController();
