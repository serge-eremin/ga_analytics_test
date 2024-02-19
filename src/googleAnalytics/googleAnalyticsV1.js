import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize( 'G-HG8261BQHW')
}

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

// example:  logEvent('Subscription', 'Submit', 'Subscription form submitted')
export const logEvent = (category, action, label) => {
  ReactGA.event({
    action,
    category,
    label
  }, { tracker: 'homepage-tracker' })
}

