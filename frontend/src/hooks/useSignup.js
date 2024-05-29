import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })

        const data = await response.json()


        if (!response.ok) {
            setError(data.error)
            setIsLoading(false)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(data))

            // update AuthContext
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            setIsLoading(false)
        }
    }

    return { error, isLoading, signup }
}