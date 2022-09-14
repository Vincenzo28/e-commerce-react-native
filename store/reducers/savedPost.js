import { SAVE_POST } from "../actions/savePost";
import { REMOVE_POST } from "../actions/removePost";
import { CLEAR_CART } from "../actions/clearCart";
const initialState = {
  savedItems: [],
};

export const savedPost = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST:
      const savedPost = action.post;
      const duplicate = state.savedItems.find(
        (obj) => obj.key === savedPost.key
      );
      return {
        ...state,
        savedItems: duplicate
          ? state.savedItems
          : [...state.savedItems, savedPost],
      };
    case REMOVE_POST:
      const newSavedItems = [...state.savedItems];
      return {
        ...state,
        savedItems: state.savedItems.filter(
          (newSavedItems) => newSavedItems.key !== action.key
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        savedItems: [],
      };

    default:
      return state;
  }
};
