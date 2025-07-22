import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        debugger;

        if (location.pathname.includes('Collection') && showSearch) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    })
    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center py-5'>
            <div className='inline-flex items-center border border-gray-400 px-4 py-2 rounded-full w-3/4 sm:w-1/2 bg-white'>

                {/* Search Input */}
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-transparent text-sm'
                    type="text"
                    placeholder='Search...'
                />

                {/* Search Icon */}
                <img className='w-4 mx-2' src={assets.search_icon} alt="search" />

                {/* Close Icon */}
                <img
                    onClick={() => setShowSearch(false)}
                    className="w-4 h-4 cursor-pointer"
                    src={assets.cross_icon}
                    alt="close"
                />
            </div>
        </div>
    ) : null;
};

export default SearchBar;
