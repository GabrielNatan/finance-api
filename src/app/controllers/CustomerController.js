class CustomerController {
  async index(request, response) {
    const customers = await CustomerRepository.findAll();

    response.json(customers);
  }

  show(request, response) {
    response.send('legal show');
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
