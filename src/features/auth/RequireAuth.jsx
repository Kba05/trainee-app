import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from './authSlice'

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useSelector(selectUser);

    if (!auth) {
        return <Navigate to='/auth' state={{ from: location }}/>
    }
    return children;
}
