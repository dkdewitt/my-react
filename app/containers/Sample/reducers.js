import _ from 'lodash';
import camelCase from 'camel-case';
const initialState =  {items: ["Hello World"]};

const ACTIONS_MAP = {
  addItem(state, payload){
    const { item } = payload;

    return state.update('items', items => {
      return items.push(Item({ index: item.id, item }));
    })
  },

  deleteitem(state, payload) {
    return state.update('itemList', itemList => {
      return itemList.filter(item => item.get('id') !== payload.id);
    });
  },

  edititem(state, payload) {
    const {id, label } = payload;
    
    return state.update('itemList', itemList => {
      return itemList.map(item => {
        return (item.get('id') === id)
          ? item.set('label', label)
          : item;
      });
    });
  },

  fetchItems(state, payload){
    const  items  = payload.items;
    return Object.assign({}, state, {items:[...state.items, ...items]})
    
  },
  }

export function sample(state = initialState, action) {
  const {type, payload} = action;
  const reducer = ACTIONS_MAP[camelCase(type)];
  return (reducer) ? reducer(state, payload) : state;
}