import React from 'react';
import {Header} from './header';
import Footer from './main';
import {RouteList} from "../router-map-list";
import {Modal} from "./common/modal";

console.log('@@', Modal);
function App(){
  return (
    <>
      <Header />
      <RouteList/>
      <Modal />
    </>
  )
}

export default App
