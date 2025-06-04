import React from "react";

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-3">
                    <div className="col-6">
                        <div>
                            <h1 className="text-light heading">Stream your favorites anytime, anywhere</h1>
                            <p className="text-light "> Movies are magical portals that transport us to different emotions, and realities—all without leaving our seats.
                                With just a flicker of light and sound, they make us laugh, cry, dream, and sometimes even believe in the impossible.
                                In a world full of chaos, movies offer a moment of escape, a spark of inspiration.
                            </p>
                        </div>
                        <div className="d-flex gap-2">
                            <input type="text" className="input-field w-75  border-0  px-2" placeholder="Search Your Favourite...." />\
                            <button className="w-25 border-0 search-button" >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;