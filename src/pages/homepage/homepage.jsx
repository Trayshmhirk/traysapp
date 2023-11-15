import './homepage.style.scss'
import Sidebar from "../../components/side-bar/sidebar.component";
import Chat from '../../components/user-chat/user-chat.component';


const Homepage = () => {

   return (
      <div className="homepage min-vh-100 d-flex justify-content-center align-items-center">
         <div className="app-container d-flex rounded-1 p-0">
            <Sidebar />
            <Chat />
         </div>
      </div> 
   )
}

export default Homepage;