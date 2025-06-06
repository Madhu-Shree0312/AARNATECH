import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";



const Home = () => {

    const [movieAllData, setMovieAllData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("movie");
    const [isDataAvailable, setIsDataAvailable] = useState(true);

    const getMovieData = async () => {
        try {
            const { data } = await axios.get(
                `http://www.omdbapi.com/?apikey=57a3af3e&s=${searchKeyword}`

            );
            if (data?.Response == "True") {
                setMovieAllData(data?.Search);
                setIsDataAvailable(true)
            }
            if (data?.Response == "False") {
                setIsDataAvailable(false);
            }
        } catch (err) {
            console.log("error", err);
        }
    };

    useEffect(() => {
        getMovieData();
    }, [searchKeyword]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        setSearchKeyword(inputValue);
    }




    return (
        <>
            <div className="container-fluid">
                <div className="row px-4">
                    <div className="col-6 d-flex flex-column gap-5">
                        <div>
                            <h1 className="text-light heading">Stream your favorites anytime, anywhere</h1>
                            <p className="text-light "> Movies are magical portals that transport us to different emotions, and realities—all without leaving our seats.
                                With just a flicker of light and sound, they make us laugh, cry, dream, and sometimes even believe in the impossible.
                                In a world full of chaos, movies offer a moment of escape, a spark of inspiration.
                            </p>
                        </div>
                        <div className="d-flex gap-2 ">
                            <input type="text"
                                className="input-field w-75  border-0  px-2"
                                placeholder="Search Your Favourite...."
                                value={inputValue}
                                onChange={handleInputChange} />
                            <button className="w-25 border-0 search-button" onClick={handleSearch} >Search</button>
                        </div>
                    </div>
                </div>
                <div className="row px-4 my-5 row-gap-4 gap-3 justify-content-between">
                    {isDataAvailable ? (
                        movieAllData?.map((movie) => {
                            return (
                                <div className="col-2" key={movie?.imdbID}>
                                    <NavLink className={"text-decoration-none"} to={`/single/${movie?.imdbID}`}>
                                        <div className="card-bg rounded">
                                            <div >
                                                <img src={movie?.Poster}
                                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                                            </div>
                                            <div className="py-2">
                                                <p className=" heading-color fs-5 text-center m-0 text-overflow px-2">{movie?.Title}</p>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            );
                        })
                    ) : (
                        <h1 className="fs-1 text-center text-white">No Result Found</h1>
                    )}


                </div>
            </div>
        </>
    );
};

export default Home;