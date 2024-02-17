export function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('G-90HR2WVVJM')
    window.GA_INITIALIZED = true
  }
}
