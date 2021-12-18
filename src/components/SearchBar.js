import React,{useState, useEffect} from 'react';

const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault(); //doesn't reload/erase the searchbar
        props.onSearchSubmit(term);
    }

    return(
        <div className = "ui segment">
            <form onSubmit = {onFormSubmit} className = "ui form">
                <div className = "field"> 
                    <label> Video Search </label>
                    <input type = "text"
                        value = {term}
                        onChange = {(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;