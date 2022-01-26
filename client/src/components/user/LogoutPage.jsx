import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../App'

const LogoutPage = () => {
    const [user, setUser] = useContext(UserContext)

    const history = useHistory()

    useEffect(() => {
        setUser({})

        history.push('/')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default LogoutPage
