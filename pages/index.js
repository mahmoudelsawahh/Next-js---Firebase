import Form from '../Component/Form'
import Header from '../Component/Header'
import Items from '../Component/Items'
import UseFireStore from '../firebase/UseFireStore'

const index = () => {
  return (
    <div>
   <Header/>
    <Form/>
    <Items/>
    <UseFireStore/>
    </div>
  )
}
export default index