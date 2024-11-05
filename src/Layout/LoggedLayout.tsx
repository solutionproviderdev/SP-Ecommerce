import { Outlet } from 'react-router-dom'
import { useState } from "react"
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

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


