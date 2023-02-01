import {createContext} from 'react'

type PRODUCT_CART_TYPE = {
    qtd: string ,
    id_product: number,
    id: number,
    name: string,
    img: string,
    price: number
}

interface PRODUCT_CONTEXT {
    productCart: PRODUCT_CART_TYPE[],
    setProductCart: (_:any) => void
}

const MyContext = createContext<PRODUCT_CONTEXT>({} as any)

export default MyContext;