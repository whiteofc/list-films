import React from "react";
import './style.css'

function Films() {
  const listFilms = [
    {name: 'Massacre da serra eletrica'},
    {name: 'Sonic'},
    {name: 'Homem aranha'},
    {name: 'Homem aranha 3'}
  ]
  const findFilms = listFilms.find(item => item.name === 'Homem aranha');
  
  return (
    <div className="films">
      {
          listFilms.map((item, i) => <h1 key={i}>{ item.name }</h1>)
      }
    </div>
  );
}

export default Films;