const UNPROTECTED_ROUTE_PREFIXES = ['/api/public/', '/api/auth/login', '/api/auth/register']

function getToken() {
  return localStorage.getItem('token')
}

function isUnprotectedPath(pathname: string) {
  return UNPROTECTED_ROUTE_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export { getToken, isUnprotectedPath }
