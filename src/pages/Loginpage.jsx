import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import { logEvent } from '../googleAnalytics/googleAnalyticsV1'

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, {replace: true}));
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit" onClick={() => logEvent('Button Click',
          'Clicked on Login','Login Page')}>Login</button>
      </form>
    </div>
  )
}
