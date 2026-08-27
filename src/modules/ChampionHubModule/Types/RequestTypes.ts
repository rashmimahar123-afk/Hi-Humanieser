export type FOCUS_AND_RITUAL_SELECTION_REQUEST = {
  focus_area: string;
  team_ritual_id: string;
  activation_message: string;
};
export type ACTIVATE_RITUAL_REQUEST_TYPES = {
  focus_area: string;
  team_ritual_id: string;
  activation_message: string;
};
export type DEACTIVATE_RITUAL_REQUEST_TYPES = {
  team_ritual_id: string;
};
export type ADD_MY_NOTES_REQUEST_TYPES = {
  note: string;
  shared_anonymously: boolean;
};
export type EDIT_MY_NOTES_REQUEST_TYPES = {
  note_id: string;
  note: string;
  shared_anonymously: boolean;
};
