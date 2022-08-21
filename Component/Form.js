import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handelAmount, handelDate, handelTitle } from '../Redux/DataForm';
import styles from '../styles/Form.module.css'
const Form = () => {
  const [title , setTitle] = useState('');
  const [amount , setAmount] = useState('');
  const [date , setDate] = useState('');  
  const dispatch = useDispatch();
  const handelSubmit = (e)=>{
    e.preventDefault();
    if(title && amount && date ){
      dispatch(handelTitle(title))
      dispatch(handelAmount(amount))
      dispatch(handelDate(date))
      setTitle('')
      setAmount('')
      setDate('')
    }else{
      console.log('Please Write Your Validation')
    }

  }
  
  return (
    <div className='container'>
     <form onSubmit={handelSubmit}>
     <div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInputGrid" placeholder="Write New Title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
      <label htmlFor="floatingInputGrid">Enter Title</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <input type="number" className="form-control" id="floatingInputGrid" placeholder="Enter Amount" onChange={(e)=> setAmount(e.target.value)}  value={amount}/>
      <label htmlFor="floatingInputGrid">Amount</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <input type='month' className="form-control" id="floatingInputGrid" placeholder="Enter your Date" onChange={(e)=> setDate(e.target.value)}  value={date}/>
      <label htmlFor="floatingInputGrid">Date</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <input className={styles.but} type='submit'/>
    </div>
  </div>
     </div>
</form>
    </div>
  )
}
export default Form