import React, { useContext } from "react";
import "./SearchForm.css";
import DataResults from "../../utils/DataResults";

const SearchForm = () => {
    const context = useContext(DataResults);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}

export default SearchForm;