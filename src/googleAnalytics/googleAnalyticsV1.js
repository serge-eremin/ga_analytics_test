import ReactGA from 'react-ga4'

export function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('G-HG8261BQHW')
    window.GA_INITIALIZED = true
  }
}

export const initGA = () => {
  ReactGA.initialize( 'G-HG8261BQHW')
}

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

