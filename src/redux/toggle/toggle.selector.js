import { createSelector } from "reselect";

const selectToggle = state => state.toggle;

export const selectHidden = createSelector(
   [selectToggle],
   (toggle) => toggle.hidden
)

export const selectOpenChat = createSelector(
   [selectToggle],
   (toggle) => toggle.openChat
)

export const selectDisplayUsers = createSelector(
   [selectToggle],
   (toggle) => toggle.displayUsers
)