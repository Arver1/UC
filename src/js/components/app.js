import React from 'react';
import {Header} from './header';
import Footer from './main';
import {RouteList} from "../router-map-list";

function App(){
  return (
    <>
      <Header/>
      <RouteList/>
    </>
  )
}

export default App
