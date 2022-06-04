import React from 'react'

function Basketitem({item , product}) {
  return (
  <>
    <li className='basket-item'>
        {product.title} <span>x {item.amount}</span>
    </li>
    <style jsx>{`
     .basket-item{
       padding-bottom:10px;
       font-size:17px;
     }
     .basket-item{
       color:#999;
     }
    
    
    
    `}</style>
  
  
  </>
  )
}

export default Basketitem