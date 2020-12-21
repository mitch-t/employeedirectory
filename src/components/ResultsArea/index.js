import React, { useState, useEffect } from "react";
import ResultsTable from "../ResultsTable";
import Nav from "../Nav";
import API from "../../utils/API";
import "./ResultsArea.css";
import DataResults from "../../utils/DataResults";

const DataArea = () => {
  const [State, setState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" },
    ],
  });

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = State.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setState({
      ...State,
      filteredUsers: filteredList,
    });
  };

  useEffect(() => {
    API.getUsers().then((results) => {
      setState({
        ...State,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, []);

  return (
    <DataResults.Provider value={{ State, handleSearchChange }}>
      <Nav />
      <div className="data-area">
        {State.filteredUsers.length > 0 ? <ResultsTable /> : <div></div>}
      </div>
    </DataResults.Provider>
  );
};

export default DataArea;