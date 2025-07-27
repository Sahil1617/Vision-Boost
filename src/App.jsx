import './App.css'
import React from 'react'
import Home from './Components/Home'

function App() {
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-600'>Enhance your images with AI</p>
      </div>
      <Home/>
      <div className='text-sm text-gray-600 mt-6'>
        Upload an image to get started 🚀 
        <p className='text-s text-center'>Powered by @Sahil &copy;2025</p>
      </div>
    </div>
  )
}

export default App