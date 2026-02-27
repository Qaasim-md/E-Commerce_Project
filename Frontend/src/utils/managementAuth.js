const MGMT_USER_KEY = 'management_user'
const ALLOWED_USERS = ['onkie', 'qaasim', 'amo', 'aiden', 'onkie1', 'qaasim2', 'amo3', 'aiden4']
const SHARED_PASSWORD = import.meta.env.VITE_MANAGEMENT_PASSWORD || 'Management@123'

export function isManagementUser(username, password) {
  if (!username || !password) return false
  return ALLOWED_USERS.includes(String(username).trim().toLowerCase()) && password === SHARED_PASSWORD
}

export function setManagementSession(username) {
  localStorage.setItem(MGMT_USER_KEY, String(username).trim())
}

export function getManagementUser() {
  return localStorage.getItem(MGMT_USER_KEY)
}

export function clearManagementSession() {
  localStorage.removeItem(MGMT_USER_KEY)
}

export function isManagementAuthenticated() {
  return Boolean(getManagementUser())
}
