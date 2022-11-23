import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../Redux/cartSlice';
import { store } from '../Redux/store';
import { addCartData } from '../Redux/cartSlice';
import { deleteCartData } from '../Redux/cartSlice';
import { updateCartData} from '../Redux/cartSlice'; 
const ShoppingCart = () => {
  const stateData=useSelector((state)=>state)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchData())
  },[]);

  const addItem=()=>{
    let productId=document.getElementById("prodId").value;
    let productQuantity=document.getElementById("prodquantity").value;
    let obj={
      userId:1,
      products:[{id:productId,quantity:productQuantity}]
    } 
    if( productId=="",productQuantity==""){
      alert("please fill the all field");
    }else{
    dispatch(addCartData(obj));
    document.getElementById("prodId").value="";
    document.getElementById("prodquantity").value="";
    stateData.Reducer.status="Data is added suceessfuly";
  }
  }
const updateData=(e)=>{
  let productId=e.target.getAttribute("pid");
  console.log()
  let obj={
    userId:1,
    products: [
      {
        id: productId,
        quantity: 20,
      },
    ]
  }
dispatch(updateCartData(obj));
}
const deleteData=()=>{
  dispatch(deleteCartData());
  stateData.Reducer.status="Data is deleted suceessfuly";
}
  console.log( store.getState())
  return (
    <div id="outer">
      <div id="form">
        <h1>Add to Cart</h1>
        <hr></hr>
        <p>Product Id</p>
        <input id="prodId" type="number" className='inpproductItem'/>
        <p>Quantity</p>
        <input id="prodquantity" type="number" className='inpproductItem'/><br></br>
        <button id="btnAddCart" onClick={addItem}>Add To Cart</button>
        <hr></hr>
        {stateData.Reducer.status=="loading"?<center><img alt='' height="40px" width="50px" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></img></center>:<div id="displayStatus"><p>{stateData.Reducer.status}</p></div>}

      </div>
      <div id="cart">
        <h1>Shopping Cart</h1>
        <hr></hr>
        
        <button id="btndel" onClick={deleteData}>Delete Cart</button>
        <table>
          <tr><th>S.No.</th><th>Title</th><th>Quantity</th><th>Action</th><th>Price</th></tr>
         {
          stateData.Reducer.cart.map((item,i)=>{
            return(
              <>
              <tr><td>{item.id}</td><td>{item.title}</td><td><input className='inpQuant' type="text" value={item.quantity}/></td><td><button className='btnUpdate' onClick={updateData} pid={item.id}>Update</button></td><td><span>{item.total}</span></td></tr>
              </>
            )
          })
         }
        </table>
      </div>
    </div>
  )
}

export default ShoppingCart