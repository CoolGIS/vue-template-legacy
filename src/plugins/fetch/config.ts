const UNPROTECTED_PATHS = ['/login', '/public']

function getToken() {
  return localStorage.getItem('token')
}

function isUnprotectedPath(pathname: string) {
  return UNPROTECTED_PATHS.includes(pathname)
}

export { getToken, isUnprotectedPath }
