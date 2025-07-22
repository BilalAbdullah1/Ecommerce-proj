import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubcategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    let result = products.filter(product =>
      (category.length === 0 || category.includes(product.category)) &&
      (subcategory.length === 0 || subcategory.includes(product.subcategory)) &&
      (!showSearch || product.name.toLowerCase().includes(search.toLowerCase()))
    );

    switch (sortType) {
      case 'low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // "relevant" does not sort
        break;
    }

    setFilteredProducts(result);
  }, [category, subcategory, products, sortType, search, showSearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label key={cat} className='flex gap-2'>
                <input
                  className="w-3"
                  type='checkbox'
                  onChange={toggleCategory}
                  value={cat}
                  checked={category.includes(cat)}
                />
                {cat}
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
                <input
                  className="w-3"
                  type='checkbox'
                  onChange={toggleSubcategory}
                  value={sub}
                  checked={subcategory.includes(sub)}
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-500 text-sm px-2"
            value={sortType}
          >
            <option value="relevant">Sort By Relevant</option>
            <option value="low-high">Sort By Low-High</option>
            <option value="high-low">Sort By High-Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.map((item, index) => (
            <div key={index} className='border rounded p-2'>
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <p>{item.name}</p>
              <p className='text-sm text-gray-500'>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
