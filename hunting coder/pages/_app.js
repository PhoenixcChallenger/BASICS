import Header from '@/components/header/Header'
import '@/styles/globals.css'
import store from "../app/store"
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {
  return(<>
  <Provider store={store}>
    <Header />
    <Component {...pageProps} />
  </Provider>
  </>) 
}
