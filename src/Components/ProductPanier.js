import React from 'react'

const ProductPanier = ({el,increament}) => {
  return (
    <tr>
        <td><img src={el.image} width='40px' alt="Product" /></td>
        <td>{el.title}</td>
        <td>{el.price} DT</td>
        <td>
            <button onClick={()=>increament(el)}>+</button>
            <p>{el.qteA}</p>
            <button>-</button>
        </td>
        <td>{el.pT}</td>
        <td>
            <button>x</button>
        </td>
    </tr>
  )
}

export default ProductPanier