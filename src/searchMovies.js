import React from 'react';

export default function searchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "Jurasic Park"

        const url = `https://api.themoviedb.org/search/movie?api_key=&language=en=US&query=${query}&page=1&include_adult=false `;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }

    }

    return ( 
            <form className = 'form' 
             onSubmit={searchMovies}>
                <label className = 'label' htmlFor = "query"> Movie Name </label>
                <input className = 'input' 
                    type = 'text' 
                    placeholder = 'e.g Die Hard'
                    name = 'query'
                />
                <button className = "button"
                    type = 'submit'>
                    Search 
                </button> 
            </form>
    )

}