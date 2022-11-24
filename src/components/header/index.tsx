import React, { useState } from 'react'
import headerimg from '../../../assets/img/Carrinho.png'

import './index.scss'

import Item from '../../components/Item'

import Modal from 'react-modal'
Modal.setAppElement('#root');

interface HEADER_PROPS {
    productCart: any,
}

export function Header({productCart}: HEADER_PROPS) {
    const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return(

        <header className="header">

            <h1> Rocketshoes </h1>

            <div onClick={handleOpenNewTransactionModal} className='header__div'>
                <table>
                    <thead>
                        <tr>
                            <td>Carrinho de Compras</td>
                            <td>0</td>
                            <td><img className='header__div__img' src={headerimg}/></td>
                        </tr>
                    </thead>
                </table>
            </div>

            <Modal className='Modal' overlayClassName='react-modal-overlay' isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>

                <table className='table'>
                    <thead className='tr'>
                        <tr>
                            <th>Produto</th>
                            <th>qtd</th>
                            <th>Subtotal</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            productCart.map((item:any) => {
                                console.log({item})
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.qtd}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Modal>
        </header>
    )
}