import './Ap.css';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Sidebar from './Components/Sidebar Section/Sidebar'
import Top from './Components/Body Section/Top Section/Top'
import Agence from './Components/Agence/Agence'
import Inscription from './Components/Inscription/Inscription'
import Automobile from './Components/Automobile/Automobile'
import Accident from './Components/Assurance Accident/Accident'
import Habitation from './Components/Multirisque Habitation/Habitation'
import Gain from './Components/Gain Impot/Gain'
import Epargne from './Components/Epargne Premlum/Epargne'
import Agricolene from './Components/Assurance Agricole/Agricolene'
// import AgricoleGréle from './Components/Assurance Agricole/AssuranceGréle'
import Grele from './Components/Assurance Agricole/AssuranceGrele/Grele'
import AgricoleIncendie from './Components/Assurance Agricole/AssuranceIncendie/AgricoleIncendie'
import MultirisqueSerre from './Components/Assurance Agricole/AssuranceSerre/MultirisqueSerre'
import Mortalité from './Components/Assurance Agricole/AssuranceMortalité/AssuranceMortalité'
import Responsabilité from './Components/Assurance Agricole/Responsabilité Civile Agriculteur/responsabilité'
import Apicole from './Components/Assurance Agricole/Assurance multirisques apicoles/Apicoles'
import Chambre from './Components/Assurance Agricole/Chambres Frigorifiques/Chambre'
import Peche from './Components/Assurance Agricole/Corps Navire Pêche/Peche'
import Contact from './Components/Contact/Contact'
import Profisionnelle from './Components/Multirisque Profissionnelle/Profissionnelle'
import Calcul from './Components/Epargne Premlum/Calcule/Calcule'
import Constitu from './Components/Epargne Premlum/Constitue/Constitu'
// Import React router dom
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Lets creat a router

 const router = createBrowserRouter([

  {
    path: '/home',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="top">
          <Top />
        </div>
      </div>
    )
  },
  
  {
    path: '/',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="top">
          <Login />
        </div>
      </div>
    )
  },
  {
    path: '/register',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
      <div className="register">
        <Register/>
      </div>
    </div>
      )
  },


  {
    path: '/automobile',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="top">
          <Automobile />
        </div>
      </div>
    )
  },

  {
    path: '/accident',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="accident">
          <Accident />
        </div>
      </div>
    )
  },


  {
    path: '/agricolene',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="agricolene">
          <Agricolene />
        </div>
      </div>
    )
  },

  // {
  //   path: '/agricole-gréle',
  //   element: (
  //     <div className="container">
  //       <div className="sidebar">
  //         <Sidebar />
  //       </div>
  //       <div className="agricole">
  //         <AgricoleGréle />
  //       </div>
  //     </div>
  //   )
  // },

  {
    path: '/agricole-gréle',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="grele">
          <Grele />
        </div>
      </div>
    )
  },
  {
    path: '/agricole-incendie',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="incendie">
          <AgricoleIncendie />
        </div>
      </div>
    )
  },

  {
    path: '/agricole-serre',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="multirisque-serre">
          <MultirisqueSerre />
        </div>
      </div>
    )
  },

  {
    path: '/agricole-mortalité',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="assurance-mortalité">
          <Mortalité />
        </div>
      </div>
    )
  },

  {
    path: '/responsabilité-agricole-civile',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="responsabilité-agricole">
          <Responsabilité />
        </div>
      </div>
    )
  },

  {
    path: '/assurance-multirisques-apicole',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="multirisque-apicole">
          <Apicole />
        </div>
      </div>
    )
  },

  {
    path: '/assurance-chambres-frigorifiques',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="chambre-frigorifiques">
          <Chambre />
        </div>
      </div>
    )
  },

  {
    path: '/assurance-corps-navire-peche',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="navire-peche">
          <Peche />
        </div>
      </div>
    )
  },

  {
    path: '/profisionnelle',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="profisionnelle">
          <Profisionnelle />
        </div>
      </div>
    )
  },

  {
    path: '/agence',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="top">
          <Agence />
        </div>
      </div>
    )
  },

  {
    path: '/contact',
    element: (
      <div className="container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <div className="contact">
          <Contact />
        </div>
      </div>
    )
  },
  {
    path: '/inscription',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="top">
            <Inscription/>
        </div>
      </div>
      )
  },


  {
    path: '/habitation',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="habitation">
            <Habitation/>
        </div>
      </div>
      )
  }, 

  {
    path: '/epargne',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="epargne">
            <Epargne/>
        </div>
      </div>
      )
  },
  {
    path: '/calcul',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="calcul">
            <Calcul/>
        </div>
      </div>
      )
  },
  {
    path: '/constitu',
    element: (
    <div className='container'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="constitu">
            <Constitu/>
        </div>
      </div>
      )
  },

  {
    path: '/gain',
    element: (
    <div className='containe'>
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
        <div className="gain">
            <Gain/>
        </div>
      </div>
      )
  },
])

function App  ()  {
  return (
  <div>
    <RouterProvider router={router}/>
  </div>

  )
}

export default App
