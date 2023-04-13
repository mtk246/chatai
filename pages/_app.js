import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from '@/components/HeaderComponent';
import Navbar from '@/components/utils/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

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
