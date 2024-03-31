import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//955ca5e1

const api_url = 'http://www.omdbapi.com/?apikey=955ca5e1'




const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchmobiess = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }


    useEffect(() => {

        searchmobiess('spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>Movieland</h1>

            <div className='search'>
                <input
                    placeholder='serach' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <img src={SearchIcon} alt='search' onClick={() => searchmobiess(searchTerm)} />

            </div>
            {
                movies?.length > 0
                    ? (

                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>no movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;