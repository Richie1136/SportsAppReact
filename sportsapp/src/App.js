import AllRoutes from './components/routes/Routes';
import './App.css'
import { useEffect } from 'react'
import { useStateValue } from './store/state-context';
import { auth } from './firebase';

const App = () => {

  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])


  return (
    <div className='app'>
      <AllRoutes />
    </div>
  );
}

export default App;
