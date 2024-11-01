import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import Product from './Product';
import Category from './Category';

const Home = () => {
 
  return (
    <div className="p-2">
      <Slider />
      <Category />
      <Product />
    </div>
  );
};

export default Home;
