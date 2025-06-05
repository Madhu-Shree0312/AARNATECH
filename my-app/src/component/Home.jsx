import React,{useEffect} from "react";
import axios from "axios";

const Home = () => {


    const getMovieData = async () =>{
        const data = await useActionState.get(
            "http://www.omdbapi.com/?apikey=57a3af3e&i=tt1285016&s=movie"
        );
        console.log("movie-data",data);
    };

    useEffect(()=>{
    getMovieData();
    },[]);

    return (
        <>
            <div className="container-fluid">
                <div className="row px-3">
                    <div className="col-6 d-flex flex-column gap-5">
                        <div>
                            <h1 className="text-light heading">Stream your favorites anytime, anywhere</h1>
                            <p className="text-light "> Movies are magical portals that transport us to different emotions, and realities—all without leaving our seats.
                                With just a flicker of light and sound, they make us laugh, cry, dream, and sometimes even believe in the impossible.
                                In a world full of chaos, movies offer a moment of escape, a spark of inspiration.
                            </p>
                        </div>
                        <div className="d-flex gap-2 ">
                            <input type="text" className="input-field w-75  border-0  px-2" placeholder="Search Your Favourite...." />\
                            <button className="w-25 border-0 search-button" >Search</button>
                        </div>
                    </div>
                </div>
                <div className="row px-4 my-5 row-gap-4">
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2  ">
                        <div className="card-bg rounded">
                            <div >
                                <img src="https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg"
                                    alt="movie-cart" className="movie-card p-2 pb-0" />
                            </div>
                            <div className="py-2">
                                <p className=" heading-color fs-5 text-center m-0">Movie Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;