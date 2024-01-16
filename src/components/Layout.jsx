import React from 'react';
import { Outlet } from 'react-router-dom';
export { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className='container'>
                <Outlet>

                </Outlet>
                <footer class="bg-dark text-light p-4">Este es el footer</footer>
            </div>

        </>
    )
}

export default Layout