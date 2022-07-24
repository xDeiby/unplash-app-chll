export const changeModal = ({
  create = false,
  update = false,
  remove = false,
} = {}) => ({
  type: "CHANGE_MODAL",
  payload: { create, update, remove },
});

export const changeSelectedPhoto = (photo) => ({
  type: "CHANGE_SELECTED",
  payload: photo,
});

export const searchPhoto = (query) => ({
  type: "SEARCH",
  payload: query,
});

export const changeSession = (session) => ({
  type: "SESSION",
  payload: session,
});
