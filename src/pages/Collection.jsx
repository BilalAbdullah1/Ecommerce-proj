import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [Category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const toggleCategory = (e) => {
    const value = e.target.value
    if (Category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value))
    } else {
      setCategory(prev => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    const filtered = products.filter(product =>
      (Category.length === 0 || Category.includes(product.category)) &&
      (subCategory.length === 0 || subCategory.includes(product.subcategory))
    )
    setFilterProduct(filtered)
  }, [Category, subCategory, products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Section */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label key={cat} className='flex gap-2'>
                <input className="w-3" type='checkbox' onChange={toggleCategory} value={cat} /> {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUBCATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['topwear', 'bottomwear', 'Winterwear'].map(sub => (
              <label key={sub} className='flex gap-2'>
                <input className="w-3" type='checkbox' onChange={toggleSubCategory} value={sub} /> {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select className="border-2 border-gray-500 text-sm px-2">
            <option value="relevant">Sort By Relevent</option>
            <option value="low-high">Sort By Low-High</option>
            <option value="high-low">Sort By High-low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item, index) => (
            <div key={index} className='border rounded p-2'>
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <p>{item.name}</p>
              <p className='text-sm text-gray-500'>${item.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Collection
