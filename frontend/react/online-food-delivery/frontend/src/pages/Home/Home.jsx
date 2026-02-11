import React, {useState} from 'react';
import './Home.css';
import { Header } from '../../komponents/Header/Header';
import ExploreMenu from '../../komponents/ExploreMenu/ExploreMenu';
import { FoodDisplay } from '../../komponents/FoodDisplay/FoodDisplay';
import AppDownload from '../../komponents/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div>
      <Header />
      <ExploreMenu category = {category} setCategory = {setCategory}/>
      <FoodDisplay category = {category} />
      <AppDownload/>
    </div>
  )
}

export default Home;