const UNPROTECTED_ROUTES = ['/login', '/public']

function getToken() {
  return localStorage.getItem('token')
}

function isUnprotectedRoute(pathname: string) {
  return UNPROTECTED_ROUTES.includes(pathname)
}

export { getToken, isUnprotectedRoute }
