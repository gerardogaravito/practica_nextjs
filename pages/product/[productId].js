import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {

  const [product, setProduct] = useState({})

  //router -> query -> [nombreVariable]
  //declare: const router = useRouter()
  //use:     {router.query.productId}

  const { 
    query: { productId }
  } = useRouter()

  useEffect(() => {
    productId && fetch(`http://localhost:3000/api/avo/${productId}`)
    .then(response => response.json())
    .then(( data ) => setProduct(data))
  }, [])

  return (
    <div>
      Esta es la página del producto: {product.name}
    </div>
  )
}

export default ProductItem
