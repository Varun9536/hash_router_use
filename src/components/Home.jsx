import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>


            <Link to="contact">CONTACT</Link>
            <div>

            </div>
            <Link to="address">address</Link>


            <Outlet />
        </div>
    )
}
