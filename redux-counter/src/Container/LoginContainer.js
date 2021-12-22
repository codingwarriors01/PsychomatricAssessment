import SignIn from '../Component/login'
import {connect} from 'react-redux'
import {submit} from '../Service/Actions/actions'

const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    handleSubmit:data=>dispatch(submit(data)),


})
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)