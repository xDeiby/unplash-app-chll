export const INITIAL_STATE = {
  modals: {
    remove: false,
    update: false,
    create: false,
  },
  selectedPhoto: null,
  search: "",
  session: null,
};

export const galleryContextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_MODAL":
      return { ...state, modals: action.payload };

    case "CHANGE_SELECTED":
      return { ...state, selectedPhoto: action.payload };

    case "SEARCH":
      return { ...state, search: action.payload };

    case "SESSION":
      return { ...state, session: action.payload };

    default:
      return state;
  }
};
