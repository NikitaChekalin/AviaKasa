import {useState, useCallback,useEffect} from 'react'
const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUSerId] = useState(null)


    const login = useCallback( (jwtToken, id) => {
        setToken(jwtToken)
        setUSerId(id)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id,token: jwtToken
        }))
    }, [] )
    

    const logout = useCallback( () => {
        setToken(null)
        setUSerId(null)
        localStorage.removeItem(storageName)
    }, [] )
    
    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token){
            login(data.token , data.userId)
        }
    } ,[login])
    return {login, logout, token, userId}
}