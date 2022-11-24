import Shelf from '../../components/Shelf'
import './index.scss'
import '../../Global.css'
import { useEffect, useState } from 'react'
import { Header } from '../../components/header'

interface PRODUCT_PROPS {
    id: number,
    name: string,
    img: string,
    price: number
}

export default function Home({ }:PRODUCT_PROPS) {
    const [productCart, setProductCart] = useState([])

    useEffect(() => {
        console.log('update state')
        console.log(productCart)
    },[productCart])

    return(
        <>

            <Header productCart={productCart} />

        <main>

            <Shelf productCart={productCart} setProductCart={setProductCart}/>

        </main>
        <footer className="footer" >

        </footer>
        </>
    )
}