const WalletRepository = require('../repositories/WalletRepository');

class WalletController {
  async index() {
    const wallets = await WalletRepository.findAll();

    return wallets;
  }

  async show(id) {
    const wallet = await WalletRepository.findById(id);

    if (!wallet) {
      return 'Wallet not found';
    }

    return wallet;
  }

  async store(id) {
    const wallet = await WalletRepository.create({ balance: 0, walletId: id });
    return wallet;
  }

  async delete(id) {
    await WalletRepository.delete(id);
    return 'Wallet deleted';
  }
}

module.exports = new WalletController();
