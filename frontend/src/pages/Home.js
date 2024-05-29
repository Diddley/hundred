import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

// Components


const Home = () => {
    const { user } = useAuthContext()


    return (
        <div className="home">

        </div>
    )
}


export default Home;