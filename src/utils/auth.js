const userInfoKey = 'userInfo';
export function getUserInfo() {
  return window.localStorage.getItem(userInfoKey)
}
export function setUserInfo() {
  return window.localStorage.setItem(userInfoKey,info)
}
export function removeUserInfo() {
  return window.localStorage.removeItem(userInfoKey)
}
