// import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

import { Homepage } from './pages/Homepage'
import { About } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Createpost } from './pages/Createpost'
import { Editpost } from './pages/Editpost'
import { Singlepage } from './pages/Singlepage'
import { Notfoundpage } from './pages/Notfoundpage'
import { LoginPage } from './pages/Loginpage'
import { Layout } from './components/Layout'
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

ReactGA.initialize('G-FT7X3X1NKK')

function App() {
  const location = useLocation()
  console.log({location})

  // useEffect(() => {
  //   ReactGA.initialize(
  //     [
  //       {
  //         trackingId: 'G-2VCQLP8SWM',
  //         gaOptions: {
  //           name: 'homepage_tracker',
  //         },
  //         // gtagOptions: {...}
  //       },
  //       {
  //         trackingId: 'G-01QY50FKYF',
  //         gaOptions: { name: 'blogpage_tracker' }
  //       },
  //       {
  //         trackingId: 'G-RSP3XV0E0G',
  //         gaOptions: { name: 'aboutpage_tracker' }
  //       }
  //     ],
  //     { testMode: true }
  //   )
  //   ReactGA.send({ hitType: "pageview", page: location.pathname, title: "P" })
  //
  //   ReactGA.event({
  //     category: "View Page",
  //     action: "Go Throw Page",
  //     label: "your label"
  //   })
  //
  // }, [location.pathname])

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
</AuthProvider>
  );
}

export default App;
