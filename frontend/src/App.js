import React from 'react';
import Main from './components/Main';
import './App.css';

const App = () => (
  <div class="container" id="centered-container">
     <div class="row align-self-start">
       <img id="logo" src="https://i.imgur.com/v9Rv3aA.png" alt="logo" class="rounded mx-auto d-block">
       </img>
     </div>
     <div class="col align-self-center">
       <div class="row align-items-start">
         <h1 class="col align-self-center">DApp Upload</h1>
         <break></break>
         <div id="description" class="row align-items-end">Decentralize Web Hosting</div>
         <break></break>
         <div id="sub-description" class="row align-items-end">Fast. Reliable. Decentralized.</div>
       </div>
       <div id="file-form" class="row align-items-center  col align-self-center">
         <Main />
       </div>
     </div>

 </div>
);

export default App;
