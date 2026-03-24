import { createContext, ReactNode, useState } from 'react'

interface CartContextData {
  isOpen: boolean
  toggleState: () => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData) //creating context with initial value

export const CartProvider = ({ children }: CartContextProps) => {
  //provider context
  const [isOpen, setIsOpen] = useState(false) // state refresh
  const toggleState = () => setIsOpen(!isOpen)

  return (
    <CartContext.Provider value={{ isOpen, toggleState }}>
      {children}
    </CartContext.Provider>
  )
}
