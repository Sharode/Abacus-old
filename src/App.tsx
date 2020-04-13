import React from 'react';
import './tailwind.css'
import { Form } from './components/Form'
import { Controller } from './context'
function App() {
  return (

    <div className="App bg-gray-200 flex justify-center items-center flex-col py-16">
      <div className="text-center text-xl mb-8">
        <h1 className="font-bold text-3xl">Abacus</h1>
        <div>Fast, Free Rental Property Analysis</div>
      </div>
      <Controller>
        <Form />

      </Controller>
    </div>
  );
}

export default App;
