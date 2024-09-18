import React from 'react'
import { BrowserRouter, Route, Router, Routes, } from 'react-router-dom'
import App from '../App'
import Explore from './Explore'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<App />} />
                    <Route path='Explore/' element={<Explore />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter