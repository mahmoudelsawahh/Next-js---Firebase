import { db } from "./firebase";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { handelAmount, handelDate, handelTitle } from '../Redux/DataForm';
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import Link from "next/link";
const UseFireStore = ()=>{
    const [item , setItem] = useState([]);
    const dataForm = useSelector((state)=>state.DataForm);
    const dispatch = useDispatch();
    useEffect(()=>{
     const dataItems = onSnapshot(collection(db , 'items'),(snapshot)=>{
        const resalt = snapshot.docs.map((ele)=>({...ele.data() , id : ele.id}))
        setItem(resalt)
     })
     return dataItems
    },[])
    const handelEdit = (id)=>{
      const titleEdit =  prompt('inter New Title');
      const amountEdit =  prompt('inter New Amount');
      const dateEdit =  prompt('inter New Date');
      if(titleEdit && amountEdit && dateEdit ){
        const docRef = doc(db , "items" , id);
        const payload = {title : titleEdit , amount : amountEdit , date : dateEdit}
         setDoc(docRef , payload)
      }else{
        console.log('No Please Write Data To Edit')
      }
        
    }
    const handelDelete = (id)=>{
        const docRef = doc(db , 'items' , id)
        deleteDoc(docRef)
    }
     const items = item.map((ele , index)=>{
        return (
            <div key={ele.id}>
                <div style={{display:'flex' , alignItems: 'center' , marginLeft:'5px' , fontSize: '20px'}}>
                <button onClick={()=>handelEdit(ele.id)} href='#'>Edit</button>
                <button onClick={()=>handelDelete(ele.id)} href='#'>Delete</button>
                <h1>{ele.title}</h1>
                </div>
                <p>{ele.amount}</p>
                <p>{ele.date}</p>
            -------------------------------------
            </div>
        )
     })
  
      const  handelClick = async ()=>{
        if(dataForm.title && dataForm.amount && dataForm.date ){
            const docRef = collection(db , "items");
            const payload = {title : dataForm.title , amount : dataForm.amount , date : dataForm.date};
            await addDoc(docRef , payload)
            dispatch(handelTitle(''))
            dispatch(handelAmount(''))
            dispatch(handelDate(''))
        }else{
            console.log('Error From FireStore Data Become Redux')
        }
      }
    return(
        <div className="container">
            <div>
                <button onClick={handelClick}>Click Her To Update</button>
           {items}
            </div>
        </div>
    )
} 
export default UseFireStore