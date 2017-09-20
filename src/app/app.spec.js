describe('Shopping List Controller', function() {
  beforeEach(module('shoppingList'));

  let ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller("MainCtrl");
    spyOn(ctrl, 'addItem').and.callThrough();
    spyOn(ctrl, 'removeItem').and.callThrough();
  }));

  it('should have default items', function() {
    expect(ctrl.item).toEqual('');
    expect(ctrl.itemList).toEqual(['Milk', 'Beverages', 'Apple']);
  });

  it('should add item', function() {
    ctrl.addItem();
    expect(ctrl.itemList.length).toEqual(4);
    expect(ctrl.addItem).toHaveBeenCalled();
    expect(ctrl.addItem).toHaveBeenCalledTimes(1);
  });

  it('should remove item', function() {
    ctrl.addItem();
    ctrl.removeItem(3);
    expect(ctrl.itemList.length).toEqual(3);
    expect(ctrl.removeItem).toHaveBeenCalled();
    expect(ctrl.removeItem).toHaveBeenCalledWith(3);
    expect(ctrl.removeItem).toHaveBeenCalledTimes(1);
  });
});