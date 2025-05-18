import { createContext } from 'react'
import { products } from '../assets/images/data'

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {
    return (
        <ShopContext.Provider value={{ products }}>
            {children}
        </ShopContext.Provider>
    )
}
