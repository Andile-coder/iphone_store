import { navigationActions } from "../slices/navigationSlice";

export const changeTab = (tab) => {
  return async (dispatch) => {
    await dispatch(navigationActions.changeTab(tab));
  };
};
