'use strict';

const LinkedList = require('../lib/linked-list');

const testNodeList = new LinkedList();
const emptyNodeList = new LinkedList();

for (let i = 0; i < 5; i++) {
  testNodeList.insertAtHead(`value ${i}`);
}

describe('#linked-list.js', () => {
  describe('testing linked-list', () => {
    test('Testing delete item on list', () => {
      testNodeList.deleteItem('value 2');
      expect(testNodeList.head.next.next.value).toEqual('value 1');
    });
    test('Testing delete item returns null if no list exists', () => {
      try {
        emptyNodeList.deleteItem('value 2');
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ The list is empty');
      }
    });
  });
});
