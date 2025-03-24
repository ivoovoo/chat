export function setFilesFunc(state,action) {
 return {
    ...state,
    files:action.payload
 }
}