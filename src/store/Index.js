import { createStore } from "redux";

const INITIAL_STORE = {
  count: 0,
  isPrivate: false,
};

const counterReducer = (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, count: store.count + 1 };
    case "DECREMENT":
      return { ...store, count: store.count - 1 };
    case "ADD":
      return { ...store, count: store.count + action.payload.value };
    case "SUBTRACT":
      return { ...store, count: store.count - action.payload.value };
    case "TOGGLE_PRIVACY":
      return { ...store, isPrivate: !store.isPrivate };
    default:
      return store;
  }
};

const counterStore = createStore(counterReducer);
export default counterStore;
