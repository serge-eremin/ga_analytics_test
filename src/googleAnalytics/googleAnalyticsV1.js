import ReactGA from 'react-ga4'

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

export const logEvent = (category, action, label) => {
  ReactGA.event({
    action,
    category,
    label
  })
}

