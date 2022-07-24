const toggleFrenchReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "TOGGLE_FRENCH":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default toggleFrenchReducer;
