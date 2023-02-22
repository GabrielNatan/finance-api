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

  store(request, response) {
    response.send('legal store');
  }

  update(request, response) {
    response.send('legal update');
  }

  delete(request, response) {
    response.send('legal delete');
  }
}

module.exports = new CustomerController();
