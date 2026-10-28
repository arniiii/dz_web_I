export type Transaction = { apply: (balance: number) => number };
export type Wallet = { balance: number; transactions: Transaction[] };
export default (wallet: Wallet): number => {
  try {
    return wallet.transactions.reduce(
      (balance, transaction) => transaction.apply(balance),
      wallet.balance
    );
  } catch {
    return wallet.balance;
  }
};
