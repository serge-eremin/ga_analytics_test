export function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
      ReactGA.initialize(
          [
            {
              trackingId: 'G-2VCQLP8SWM',
              gaOptions: {
                name: 'homepage_tracker',
              },
              // gtagOptions: {...}
            },
            {
              trackingId: 'G-01QY50FKYF',
              gaOptions: { name: 'blogpage_tracker' }
            },
            {
              trackingId: 'G-RSP3XV0E0G',
              gaOptions: { name: 'aboutpage_tracker' }
            }
          ],
          { testMode: true }
    )
    window.GA_INITIALIZED = true
  }
}
