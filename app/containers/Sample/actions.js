
import Actions from './constants';

const SampleActions = {

  fetchAllItems() {
    return dispatch => {
      dispatch({
        type: Actions.FETCH_ITEMS,
        payload: {
          items: "HELLO"
        }
        
      });
    }
  },

  newItem(item) {
    return dispatch => {

      dispatch({
        type: Actions.NEW_ITEM,
        payload: {
          items: "HELLO"
        }
        
      });
    }
  }
}
export default SampleActions;