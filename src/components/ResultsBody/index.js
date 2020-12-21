import React, { useContext } from "react";
import "./ResultsBody.css"
import DataResults from "../../utils/DataResults"

const ResultsBody = () => {
    const context = useContext(DataResults);

    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
        {context.State.filteredUsers[0] !== undefined && context.State.filteredUsers[0].name !== undefined ? (
          context.State.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="image align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {formatDate(dob.date)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default ResultsBody;