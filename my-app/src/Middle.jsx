import React from 'react'
import './Middle.css'
import Product from './Product'
function Middle() {
    let pname1={name:"Laptop",src:"https://tse2.mm.bing.net/th/id/OIP.Ig2_kw7YUHPLlPYhuqpsewHaEo?pid=Api&P=0&h=180",price:20}
    let pname2={name:"Mobile",src:"https://tse4.mm.bing.net/th/id/OIP.cdYoDVebNgY7gexByc4wRgHaL5?pid=Api&P=0&h=180",price:10}
    let pname3={name:"umberla",src:"https://tse2.mm.bing.net/th/id/OIP.y5rpqQWKSqo7uWsv2zMD0wHaGX?pid=Api&P=0&h=180",price:20}
    let pname4={name:"iorn box",src:"https://tse2.mm.bing.net/th/id/OIP.98iTB3gN9jCh0nK8x2RiBgHaGD?pid=Api&P=0&h=180",price:20}
  return (
    <div className='Middle'>
        <div className='Main'>
        <Product data={pname1}></Product>
        <Product data={pname2}></Product>
        <Product data={pname3}></Product>
        <Product data={pname4}></Product>
        </div>
        <br></br>
        <div className='Main'>
        <Product data={pname1}></Product>
        <Product data={pname2}></Product>
        <Product data={pname3}></Product>
        <Product data={pname4}></Product>
        </div>
        <div className='Main'>
        <Product data={pname1}></Product>
        <Product data={pname2}></Product>
        <Product data={pname3}></Product>
        <Product data={pname4}></Product>
        </div>
        <div className='Main'>
        <Product data={pname1}></Product>
        <Product data={pname2}></Product>
        <Product data={pname3}></Product>
        <Product data={pname4}></Product>
        </div>
        <div className='Main'>
        <Product data={pname1}></Product>
        <Product data={pname2}></Product>
        <Product data={pname3}></Product>
        <Product data={pname4}></Product>
        </div>
        </div>
  )
}

export default Middle