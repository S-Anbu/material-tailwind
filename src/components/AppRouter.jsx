import React from 'react'
import { BrowserRouter, Route, Router, Routes, } from 'react-router-dom'
import App from '../App'
import Explore from './Explore'
import Nature from './Nature'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<App />} />
                    <Route path='Home/' element={<App />} />
                    <Route path='Explore/' element={<Explore />} />
                    <Route path='Nature/' element={<Nature />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter