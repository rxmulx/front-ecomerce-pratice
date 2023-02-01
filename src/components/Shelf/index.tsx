import Item from "../Item"
import './index.scss'

const PRODUCT_LIST = [{
    id: 1,
    product_name: 'Saxofone Alto Laqueado Eb Milano Custom Sax Mi Com Case Loja',
    product_img: 'https://http2.mlstatic.com/D_NQ_NP_981736-MLB31838925158_082019-W.webp',
    product_price: 2000
},
{
    id: 2,
    product_name: 'Mini Sax Saxofone Alto De Bolso Xaphoon Portátil Minisax',
    product_img: 'https://http2.mlstatic.com/D_NQ_NP_727618-MLB49935346082_052022-W.webp',
    product_price: 2500
},
{
    id: 3,
    product_name: 'Saxofone Alto Mib Preto Com Douradas (novo) Garantia + nfe',
    product_img: 'https://http2.mlstatic.com/D_NQ_NP_804813-MLB50294300105_062022-W.webp',
    product_price: 3999.9
}]

interface PRODUCT_LIST_PROPS {
    id: number,
    product_name: string,
    product_img: string,
    product_price: number
}

export default function Shelf() {

    function RenderItems(item: PRODUCT_LIST_PROPS ) {
        return(
        <Item 
            img={item.product_img}
            name={item.product_name}
            key={item.id}
            id={item.id}
            price={item.product_price}
        />
        )
    }

    return(
        <div className="shelf">
            <ul className="shelf__list">
                {PRODUCT_LIST.map((item) => RenderItems(item))}
            </ul>
        </div>
    )
}