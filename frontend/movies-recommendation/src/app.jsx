import { useEffect, useState } from "react"
import { useParams } from 'react-router'


export function App() {
    const [movies, setMovies] = useState([])
    const [input, setInput] = useState("")
    const [movieId, setMovieId] = useState([])
    const { idMovie } = useParams()
    // const [moviePageNum, setMoviePage] = useState("")

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/movies_info/`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setMovies(Array.isArray(data) ? data: data.results ?? []) 
    //     })
    // }, [])

    const getInf = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/movies_info/`)
            const response = await res.json()
            console.log(response)
            // const convert = JSON.parse(respond)
            setMovies(Array.isArray(response) ? response : response.results ?? [])
            Array.isArray(movies) && movies.map((movie) => (
                setMovieId(movie.tmdb_id)
            ))
        } catch (error) {
            console.error("something happened")
        }
    }


    const getMovie = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/search_movie/?search=${input}`)
            const response = await res.json()
            console.log(response)
            // const convert = JSON.parse(respond)
            setMovies(Array.isArray(response) ? response : response.results ?? [])
        } catch (error) {
            console.error("something happened")
        }
    }
    // const moviePage = async () => {
    //     try {
    //         const res = await fetch(`http://127.0.0.1:8000/search_movie/?page=${moviePageNum}`)
    //         const response = await res.json()
    //         console.log(response)
    //         // const convert = JSON.parse(respond)
    //         setMovies(Array.isArray(response) ? response : response.results ?? [])
    //     } catch (error) {
    //         console.error("something happened")
    //     }
    // }

    useEffect(() => {
        getInf()
    }, [])

    const allMovies = () => {
        getInf()
    }

    const handleSubmit = () => {
        alert(`Here is you search of: ${input}`)
        console.log(movieId)
        getMovie()
    }

    return (
        <main style={{
            display: "grid",
            grid: "150px"
        }}>
            <div>
                <h1><a href="/">All Movies</a></h1>
                {/* {movies.map(movie => (
                    <div key={movie.tmdb_id}>
                        <a href={movie.genres}>{movie.genres}</a>
                    </div>
                ))} */}
                <form action={handleSubmit}>
                    <p>Search:</p>
                    <input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}

                    />
                    <button>Send</button>
                </form>
                {Array.isArray(movies) && movies.length === 0 && (
                    <p>No movies found...</p>
                )}

                {Array.isArray(movies) && movies.map(movie => (
                    <div key={movie.tmdb_id}>
                        <a >{movie.title}</a>
                        <p>From {movie.release_date}</p>
                        <img src={movie.poster_url ?? "No photo to show"} alt={movie.genres} />
                        <p>Movie Genre: {movie.genres}</p>
                        <p>Movie Popularity: {movie.popularity}</p>
                        <p>{movie.overview ?? "No description available"}</p>
                    </div>
                ))}
            </div>
        </main >
    )
}