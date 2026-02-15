import React from 'react'

const Featured = () => {
  return (
    <div className="featured">

      <div className="featuredItem">
        <img
          src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltd016cfa5b2d59c44/674ec20d0da03c5df7b553cb/BCC-2024-EXPLORER-DUBLIN-FUN-THINGS-TO-DO-HEADER_DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=960&height=540"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>

    </div>
  );
};

export default Featured;