// import React from 'react';
/* jshint esversion: 6 */
import {useEffect, useState} from 'react';
import MediaCard from './MediaCard';
import './App.css';
import SearchIcon from './search.svg';


//63a3e8dd


const API_URL = 'http://www.omdbapi.com?apikey=63a3e8dd';

// const movie1= {
//         "Title": "Superman, Spiderman or Batman",
//         "Year": "2011",
//         "imdbID": "tt2084949",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        

        console.log(data.Search);
        
        setMovies(data.Search);
    }

    useEffect(()=>{
        // searchTerm = "Latest Movies"
        searchMovies('Transformers');
        // searchMovies(searchTerm);

    },[]);

    

    return(
        <div className="app">

        <h1>Media Hub</h1>

    <div className="search">
        <input 
        placeholder= "Click here to search media" value= {searchTerm}
        onChange = {(e)=> setSearchTerm(e.target.value)
            
        }

        
        onKeyUp ={
            ()=> searchMovies(searchTerm)
        }
       
        />

        <img 
        src={SearchIcon}
        alt="Search"
        // onClick= {
        // ()=> searchMovies(searchTerm)
        // }
    />
    </div>
    {
        movies && movies.length > 0
        ?(
         <div className= "container">
             {movies.map((movie,i)=> ( 
                <MediaCard key={i} movie = {movie} />
        ))}
        </div>

        ):(
            
        <div className="empty">
            
            <h2> There are no movies found, please re-enter search term </h2>
          
        </div>
        )}
   
    </div>

        
    );
}

export default App;