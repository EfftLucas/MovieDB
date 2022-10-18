import { Card } from "./Components/Card";

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Image from './assets/imdb.svg';
export function App() {

  const [FilterData, setFilterData] = useState('');
  const [Filter, setFilter] = useState(false);

  const fetchMoveis = async (filter: boolean) => {

    if(filter === true && FilterData.length > 0) {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fb68398d9b40175ff552ca9abf053ac4&query=${encodeURI(FilterData)}`)
      return res.data
    }

    if(FilterData.length === 0) {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fb68398d9b40175ff552ca9abf053ac4')
      return res.data
    }

    if(filter === false) {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fb68398d9b40175ff552ca9abf053ac4')
      return res.data
    }

  }

  const { isLoading, data, isError } = useQuery(["Movies", FilterData], () => fetchMoveis(Filter));


  return (
    <>
    <div className="flex scrollbar-hide">
      <input className="flex-1" type="text" placeholder="Procure um Filme" onChange={(e) => {
        setFilterData(e.target.value)
        setFilter(true)
        }} />
    </div>
    <div className="bg-zinc-700 w-full flex flex-row flex-wrap justify-center">
      {isLoading ? <img className="w-80 h-80" src={Image} alt="" />: isError ? <span>isError</span> : 
        data.results.map((movie: any) => {
          return <Card key={movie.id} title={movie.original_title} description={movie.overview} poster={movie.poster_path} />
        })
      }
    </div>
    </>
    
  )
}


