import React, { useState } from "react";

export default function searchMovies() {

    const [query, setQuery] = useState('');
    
    const searchMovies = async (e) => {
        e.preventDefault();
        

        const url = `https://api.themoviedb.org/3/search/movie/?api_key=5e87ae2d66a6bcca76ece81c68d48b23&language=en=US&query=${query}&page=1&include_adult=false `;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch(err) {
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className = "button"
                    type = 'submit'>
                    Search 
                </button> 
            </form>
    )

}