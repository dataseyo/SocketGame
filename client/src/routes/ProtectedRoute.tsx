import React from 'react'
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../store/hooks'

type Props = {
    children: JSX.Element
}

const ProtectedRoute = ({children}: Props): JSX.Element => {
    const { user } = useAppSelector(state => state.user)

    if (!user) {
        return (
            <Navigate to="/login" replace></Navigate>
        )
    }
    
    return children
}

export default ProtectedRoute