import React,{useState} from 'react'
import '../Styles/Main.css';


export default function Main(props) {
    const [count,setCount]=useState(0)
    return (
        <>
    <div className='main'> 
    <div className='flex'>
        <div className='left'>
        <img  className="big-shoe"src="images/image-product-1.jpg" alt="bold"  /> 
         <img  className='mid-screen'src="images/image-product-1.jpg" alt="" />  
<div className='images'>
<img  className="one"src="images/bold.jpg" alt="shoes" />
<img className='two'     src="images/image-product-2-thumbnail.jpg" alt="shoes" />
<img className='three'   src="images/image-product-3-thumbnail.jpg" alt="shoes" />
<img className='four' src="images/image-product-4-thumbnail.jpg" alt="shoes" />
</div>
        </div>
        <div className='right'>
<h4>SNEAKERS COMPANY</h4>
<h1>Fall Limited Edition <br/>
Sneakers</h1>
<br />
<p>
    These low profile sneakers are your perfect casual wear <br />companion.Featuring a durable rubber outer sole
    they'll <br /> withstand everything the weather can offer. <br />
    
    <span className='strong'>$125.00 <button className='sm-btn'>50%</button> <br />
    <span className='not'>$250.00</span> </span>
</p>
<div className='btn'>
<button className='md-btn'>
   <img className='inner'  src="images/icon-minus.svg" alt="minus" onClick={()=> setCount(count-1)} /> 
 {count}
<img className='sec-inner' src="images/icon-plus.svg" alt="plus" onClick={()=> setCount(count + 1)}  /> 

   
    </button> 
    <button className='lt-btn' onClick={() => setCount(count + 1)}>
               
         <img className='sm-cart' src="images/icon-cart.svg" alt="cart-adding" />
         Add to cart</button>
         </div>
        </div>
        </div>  

    </div>
    </>
  )
}

