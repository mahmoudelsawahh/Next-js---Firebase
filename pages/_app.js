import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';

function MyApp({ Component, pageProps }) {
  return (
    <>
   <Provider store={Store}>
   <Component {...pageProps} />
   </Provider>
    </>
  )
}

export default MyApp
