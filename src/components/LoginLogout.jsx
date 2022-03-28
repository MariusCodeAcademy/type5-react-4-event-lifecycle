function LoginLogout({ status }) {
  return (
    <nav>
      {!status && (
        <>
          <a href='#login' className='nav-link'>
            login
          </a>
          <a href='#register' className='nav-link'>
            register
          </a>
        </>
      )}
      {status && (
        <a href='#login' className='nav-link'>
          logout
        </a>
      )}
    </nav>
  );
}

export default LoginLogout;
