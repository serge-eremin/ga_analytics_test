import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { logPageView } from './googleAnalyticsV1'


export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    logPageView()
    window.scrollTo(0, 0);
  }, [pathname])

  return null
}