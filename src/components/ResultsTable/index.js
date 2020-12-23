import React, { useContext } from "react";
import ResultsBody from "../ResultsBody";
import "./ResultsTable.css";
import DataResults from "../../utils/DataResults";

const ResultsTable = () => {
  const context = useContext(DataResults);

  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.State.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <ResultsBody />
      </table>
    </div>
  );
};

export default ResultsTable;
