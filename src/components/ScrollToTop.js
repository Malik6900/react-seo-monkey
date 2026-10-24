import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Jump back to the top when the route changes, or to the #anchor if the link has one.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
