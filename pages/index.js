import ComponentSwitcher from "@/components/utils/ComponentSwitcher";
import RequestComponent from "../components/RequestComponent"
import FooterComponent from '../components/utils/FooterComponent';

export default function Home() {
  
  return (
    <div className="container h-75 d-flex flex-column justify-content-evenly">
      <ComponentSwitcher />
      <RequestComponent />
      <FooterComponent />
    </div>
  )
}
