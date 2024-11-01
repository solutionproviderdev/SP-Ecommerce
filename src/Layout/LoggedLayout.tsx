import { Outlet } from 'react-router-dom'
import { useState } from "react"
import Navbar from '@/shared/Navbar'
import Footer from '@/shared/Footer'

const LoggedLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default LoggedLayout


