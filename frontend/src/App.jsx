import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Products API request failed (${response.status}).`)
        }

        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('Products API returned an unexpected response.')
        }

        setProducts(data)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load products.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()
    return () => controller.abort()
  }, [])

  if (loading) {
    return <p className="request-status">Loading products...</p>
  }

  if (error) {
    return <p className="request-status request-error">Could not load products: {error}</p>
  }

  return <ProductList products={products} />
}

export default App
