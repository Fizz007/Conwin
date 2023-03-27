import { ADD, DELETE, DELETEALL, EDIT } from "./actionType";

export function deletecard(payload) {
  return {
    type: DELETE,
    payload
  };
}
export function deleteall() {
  return {
    type: DELETEALL,
   
  };
}
export function addcard(payload) {
    
  return {
    type: ADD,
    payload
  };
}
export function editcard(payload) {
  return {
    type: EDIT,
    payload,
  };
}
