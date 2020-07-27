import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const balance = this.transactions.reduce(
      (acumulator, transaction) => {
        // eslint-disable-next-line no-param-reassign
        acumulator[transaction.type] += transaction.value;
        return acumulator;
      },
      { income: 0, outcome: 0, total: 0 },
    );

    balance.total = balance.income - balance.outcome;

    return balance;

    // let income = 0;
    // let outcome = 0;
    // let total = 0;

    // this.transactions.forEach(transaction => {
    //   if (transaction.type === 'income') {
    //     income += transaction.value;
    //   } else if (transaction.type === 'outcome') {
    //     outcome += transaction.value;
    //   }
    // });
    // total = income - outcome;

    // return {
    //   income,
    //   outcome,
    //   total,
    // };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
