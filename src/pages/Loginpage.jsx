import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import ReactGA from 'react-ga4'

ReactGA.initialize('G-FT7X3X1NKK')

const onClick = () => {
    ReactGA.event({
      category: "login_category",
      action: "login_action",
      label: "login_label",
      value: 'xxxx'
    })
}

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
        <button type="submit" onClick={onClick}>Login</button>
      </form>
    </div>
  )
}
