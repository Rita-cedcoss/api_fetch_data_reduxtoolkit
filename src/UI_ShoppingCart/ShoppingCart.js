import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/cartSlice';
const ShoppingCart = () => {
  const[cartData,setCartData]=useState([]);
  const state=useSelector((state)=>state)
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetchData=async()=>{
           await fetch("https://dummyjson.com/carts")
           .then(res=>res.json())
           .then((resp)=>{
            setCartData([...resp.carts[0].products]);
            console.log(resp.carts[0].products)
          });
    }
    fetchData();
  },[])
  const addItem=()=>{
    dispatch(addProduct());
  }
  console.log(state)
  return (
    <div id="outer">
      <div id="form">
        <h1>Add to Cart</h1>
        <hr></hr>
        <p>Product Id</p>
        <input className='inpproductItem'/>
        <p>Quantity</p>
        <input className='inpproductItem'/><br></br>
        <button id="btnAddCart" onClick={addItem}>Add To Cart</button>
        <hr></hr>
      </div>
      <div id="cart">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <button id="btndel">Delete Cart</button>
        <table>
          <tr><th>S.No.</th><th>Title</th><th>Quantity</th><th>Action</th><th>Price</th></tr>
          <tr><td>1</td><td>Ram</td><td><input className='inpQuant' type="text" value="3"/></td><td><button className='btnUpdate'>Update</button></td><td><span>1200</span></td></tr>
         {
          cartData.map((item,i)=>{
            return(
              <>
              <tr><td>{item.id}</td><td>{item.title}</td><td><input className='inpQuant' type="text" value={item.quantity}/></td><td><button className='btnUpdate'>Update</button></td><td><span>{item.total}</span></td></tr>
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