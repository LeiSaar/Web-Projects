import React, {useState} from 'react';
import './Home.css';
import { Header } from '../../komponents/Header/Header';
import ExploreMenu from '../../komponents/ExploreMenu/ExploreMenu';
import { FoodDisplay } from '../../komponents/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div>
      <Header />
      <ExploreMenu category = {category} setCategory = {setCategory}/>
      <FoodDisplay category = {category} />
    </div>
  )
}

export default Home;