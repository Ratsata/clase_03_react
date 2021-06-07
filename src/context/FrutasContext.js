import { createContext } from 'react'

const FrutasContext = createContext({
    frutas: [''],
    setFrutas: () => {}
})

export default FrutasContext