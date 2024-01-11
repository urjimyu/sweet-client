import { useEffect } from 'react';
import { useLogin } from '../../hooks/queries/user';

const Login = () => {
  const code: string | null = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log('실행');
    if (code) {
      // switch (method) {
      //   case 'LOGIN':
      console.log('실행');
      useLogin(code);
      //   break;
      // case 'LOGOUT':
      //   localStorage.removeItem('EXIT_LOGIN_TOKEN');
      //   navigate('/');
      //   break;
      // default:
      //   break;
      //}
    }
  }, []);

  return <div>로그인 중입니다....</div>;
};

export default Login;
