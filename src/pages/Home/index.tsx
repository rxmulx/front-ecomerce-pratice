import Shelf from '../../components/Shelf'
import './index.scss'
import '../../Global.css'
import { Header } from '../../components/header'

export default function Home() {
    return(
        <>
            <Header />
            <main>
                <Shelf />
            </main>
            <footer className="footer" >

            </footer>
        </>
    )
}