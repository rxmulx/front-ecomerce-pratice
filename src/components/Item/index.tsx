import carinho from '../../../assets/img/Carrinho.png'
import './index.scss'


type PRODUCT_CART_TYPE = {
    qtd: string ,
    id_product: number,
}

interface PRODUCT_PROPS {
    id: number,
    name: string,
    img: string,
    price: number,
    productCart: PRODUCT_CART_TYPE[],
    setProductCart: (_:any) => void
}

export default function Item({ id, img, name, price, productCart, setProductCart }: PRODUCT_PROPS) {

    const qtd_product = productCart.filter((item) => item.id_product == id )

    function calc() {

        // fazer um filter por productCart.id_product == id  para pegar as qtd do produto correto
        let product = {}

        const product_filter = productCart.filter((item) => item.id_product == id )
        //remove itens do mesmo id_product
        const product_distinct = productCart.filter((item) => item.id_product != id )
        //primeira execução 
        if ( product_filter.length == 0 ) {
            product = {
                qtd: 1,
                id_product: id,
                name: name,
                price: price,
            }
        } else {
            product = {
                qtd: product_filter[0].qtd + 1,
                id_product: id,
                name: name,
                price: price,
            }
        }
        console.log({
            product,
            productCart
        })
        setProductCart([...product_distinct, product])
    }


    return(
        <li className="product" >

            <div className='product__img' >
                <img src={img} width='200px' />
            </div>

            <div className='product__name' >
                <p>{name}</p>
            </div>

            <div className='product__price'>
                <span>R&#36;{price}</span>
            </div>

            <hr />

            <div className='product__btn-card'>

                <div className='product__btn-card__icon'>
                    <img src={carinho} width='20px' />
                    <small>{qtd_product[0]?.qtd}</small>
                </div>

                <p onClick={calc} className='product__btn-card__txt-carrinho'>Adcione no carrinho</p>

            </div>

        </li>
    )
}