export const User = {
    state: null, // initial state
    reducers: {
      // handle state changes with pure functions
      refresh(state, payload) {
        return payload;
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
    }),
  };