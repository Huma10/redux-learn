import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'
import HomeComponent from '../components/Home';

const mapStateToProps = state => ({
   
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);