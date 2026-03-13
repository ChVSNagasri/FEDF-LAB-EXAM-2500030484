import React from 'react'
import Home from './Home'
import Registration from './Registration'
import ViewList from './ViewList'
import ApiData from './ApiData'
import {Link,Routes,Route} from 'react-router-dom'
import Notfound from './Notfound'
import './nav.css'
export default function MainNavBar() {
  return (
    <div>
        <nav className="nav">
            <Link to="/"><button>Home</button></Link>
             <Link to="/registration"><button>Registration</button></Link>
              <Link to="/viewusers"><button>View Registers</button></Link>
               <Link to="/api"><button>API</button></Link>
                </nav>
               <Routes>
                 <Route index element={<Home/>}/>
                   <Route path="registration" element={<Registration/>}/>
                   <Route path="viewusers" element={<ViewList/>}/>
                     <Route path="api" element={<ApiData/>}/>
                       <Route path="*" element={<Notfound/>}/>
               </Routes>
       
    </div>
  )
}
