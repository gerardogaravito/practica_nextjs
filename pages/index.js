import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Navbar from '../components/Navbar/Navbar'

const Home = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    window.fetch('api/avo')
    .then(response => response.json())
    .then(({ data }) => {
      setProductList(data)
    })
  }, [])
  
  const StyledAnchor = styled.a`
    display: block;
    text-decoration: underline;
    color: blue;
    margin: 10px 0px;
    &:hover{
      cursor: pointer;
    }
  `

  return (
    <div>
      <Navbar/>
      <h1>Hola Platzi</h1>
      {productList.map( item => (
        <Link href={`product/${item.id}`} key={item.id} >
          <StyledAnchor>{item.name}</StyledAnchor>
        </Link>
      ))}
    </div>
  )
}

export default Home
