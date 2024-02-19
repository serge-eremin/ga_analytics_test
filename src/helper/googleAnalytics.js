export function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
      ReactGA.initialize('G-LZGWH08HEH')
    window.GA_INITIALIZED = true
  }
}
