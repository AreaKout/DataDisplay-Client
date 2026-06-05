const TOKEN_KEY = 'token'

function decodeJwtPayload(token: string): { exp?: number } | null {
  const tokenParts = token.split('.')
  if (tokenParts.length < 2) {
    return null
  }

  try {
    const base64 = tokenParts[1].replace(/-/g, '+').replace(/_/g, '/')
    const padLength = 4 - (base64.length % 4)
    const normalizedBase64 = padLength < 4 ? base64 + '='.repeat(padLength) : base64
    const payload = JSON.parse(window.atob(normalizedBase64)) as { exp?: number }
    return payload
  } catch {
    return null
  }
}

export function getToken(): string {
  return localStorage.getItem(TOKEN_KEY) ?? ''
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

export function isTokenExpired(token: string): boolean {
  if (!token) {
    return true
  }

  const payload = decodeJwtPayload(token)

  // If the token is not JWT-like for now, keep it valid to avoid false redirects.
  if (!payload?.exp) {
    return false
  }

  const nowSeconds = Math.floor(Date.now() / 1000)
  return payload.exp <= nowSeconds
}

export function isAuthed(): boolean {
  const token = getToken()
  if (!token) {
    return false
  }

  if (isTokenExpired(token)) {
    clearToken()
    return false
  }

  return true
}
