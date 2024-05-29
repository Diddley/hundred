import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')   
    const { error, isLoading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(username, email, password)
    }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>First Name</label>
            <input
                type="text"
                placeholder="first name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email address:</label>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup