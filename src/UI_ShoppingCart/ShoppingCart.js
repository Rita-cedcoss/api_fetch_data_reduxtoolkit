import React from 'react'

const ShoppingCart = () => {
  return (
    <div id="outer">
      <div id="form">
        <h1>Add to Cart</h1>
        <hr></hr>
        <p>Product Id</p>
        <input className='inpproductItem'/>
        <p>Quantity</p>
        <input className='inpproductItem'/><br></br>
        <button id="btnAddCart">Add To Cart</button>
        <hr></hr>
      </div>
      <div id="cart">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <button id="btndel">Delete Cart</button>
        <table>
          <tr><th>S.No.</th><th>Title</th><th>Quantity</th><th>Action</th><th>Price</th></tr>
          <tr><td>1</td><td>Ram</td><td><input className='inpQuant' type="text" value="3"/></td><td><button className='btnUpdate'>Update</button></td><td><span>1200</span></td></tr>
        </table>
      </div>
    </div>
  )
}

export default ShoppingCart