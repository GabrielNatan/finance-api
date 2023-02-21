class CustomerController {
  index(request, response) {
    response.send('legal index');
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
