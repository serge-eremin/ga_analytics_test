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
import { useEffect } from 'react'
import { InitializeReactGA } from './helper/initionalizeGA'


const TrackPageView = () => {
  const location = useLocation()

  useEffect(() => {
    const trackPage = async () => {
      InitializeReactGA(ReactGA)
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
    }
    trackPage()
  }, [location])
  return null
}

function App() {

  return (<AuthProvider>
      <TrackPageView/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="about" element={<About/>}>
            <Route path="contacts" element={<p>Our contact</p>}/>
            <Route path="team" element={<p>Our team</p>}/>
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace/>}/>
          <Route path="posts" element={<Blogpage/>}/>
          <Route path="posts/:id" element={<Singlepage/>}/>
          <Route path="posts/:id/edit" element={<Editpost/>}/>
          <Route path="posts/new" element={<RequireAuth>
            <Createpost/>
          </RequireAuth>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </AuthProvider>)
}

export default App

