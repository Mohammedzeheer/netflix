import React from 'react'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import RowPost from './components/rowPost/rowPost'
import {orginalUrl,actionUrl, comedyUrl, horrorUrl, romanceUrl} from './url'
import './app.css'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     {/* <RowPost/> */}
     <RowPost url={orginalUrl} title='Netflix Orginals' />
     <RowPost url={actionUrl} title='Action' isSmall/>
     <RowPost url={comedyUrl} title='Comedy' isSmall/>
     <RowPost url={horrorUrl} title='Horror' isSmall/>
     <RowPost url={romanceUrl} title='Romance' isSmall/>
    </div>
  );
}

export default App;
