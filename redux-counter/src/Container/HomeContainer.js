import Home from '../Component/home'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../Service/Actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),

    removeToCartHandler:data=>dispatch(removeToCart(data))


})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;