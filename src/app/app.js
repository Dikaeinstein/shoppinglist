angular.module('shoppingList', [])
  .controller('MainCtrl', MainCtrl);

function MainCtrl() {
  // functional implementation
  // not a lover of JS classes.
  return {
    item: '',
    itemList: ["Milk", "Beverages", "Apple"],
    addItem: addItem,
    removeItem: removeItem
  };

  ////////////////////////////////
  function addItem() {
    this.itemList.push(this.item);
    this.item = '';
  }
  function removeItem(index) {
    this.itemList.splice(index, 1);
  }
}