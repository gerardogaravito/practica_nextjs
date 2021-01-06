import React,{ useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import styled from 'styled-components'

export const getServerSideProps = async () => {
  //1 async porque en el servidor meteremos toda la carga de traer info de la api

  //4 getServerSideProps sólo puede usar urls absolutas, por eso ya debe 
  //  estar deployeada la app
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList } = await response.json()

  //2 esto retorna un objeto con los props
  return {
    props: {
      productList,
    },
  }
}

//3 productList ya no le pertenece, ahora sólo le llega como param
const Home = ({ productList }) => {

  
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
