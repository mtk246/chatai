import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from '@/components/HeaderComponent';
import Navbar from '@/components/utils/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <HeaderComponent/>
        <Component {...pageProps} />
      </Navbar>
    </>
  )
}
