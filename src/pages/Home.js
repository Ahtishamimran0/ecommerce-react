import { useSelector } from 'react-redux'
import { fetchProduct } from '../redux/action'
import ShoppingCard from "../component/ShoppingCard"

function Home() {
    const { product } = useSelector(state => state.productReduce)
    return (
        <>
            <ShoppingCard
                product={product}
                fetchProduct={fetchProduct}
            />
        </>
    )
}

export default Home