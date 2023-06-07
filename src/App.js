import React from 'react'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import RowPost from './components/rowPost/rowPost'
import './app.css'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;
