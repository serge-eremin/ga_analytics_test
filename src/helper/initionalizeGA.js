export function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('G-HG8261BQHW')
    window.GA_INITIALIZED = true
  }
}