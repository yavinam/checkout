import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext()

export const ContextProvider = ({children})=>{
    const [count, setCount] = useState(1)
    const [auth, setAuth] = useState(null)
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || [])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    return <Context.Provider value={{count, setCount, wishlist, setWishlist, cart, setCart, total,setTotal}}>{children}</Context.Provider>
}

export const useStateValue = ()=> useContext(Context) 