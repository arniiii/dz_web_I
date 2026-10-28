export default class Cart {
  constructor() {
    this.items = [];
  }
  addItem(item, count) {
    this.items.push({ item, count });
  }
  getItems() {
    return this.items;
  }
  getCost() {
    return this.items.reduce(
      (sum, { item, count }) => sum + item.price * count,
      0
    );
  }
  getCount() {
    return this.items.reduce((sum, { count }) => sum + count, 0);
  }
}
