import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default Login;
