import React from "react";
import "./table.css";

function table(props) {
  console.log(props.values);
  return (
    <div style={{ width: "100%" }}>
      <table className="table">
        <tbody>
          <tr>
            <th className="col-2" scope="row" style={{ width: "5%" }}>
              {props.index + 1}
            </th>
            <td className="col-4" style={{ width: "15%" }}>
              {props.FirstName}
            </td>
            <td className="col-2" style={{ width: "15%" }}>
              {props.LastName}
            </td>
            <td className="col-2" style={{ width: "15%" }}>
              {props.Password}
            </td>
            
            
            <td className="col-2" style={{ width: "20%" }}>
              {props.Email}
            </td>
            <td className="col-2" style={{ width: "10%" }}>
              {props.PhoneNumber}
            </td>
            <td className="col-2" style={{ width: "10%" }}>
            <button>Remove</button>
            </td>
            <td className="col-2" style={{ width: "10%" }}>
            <button>Update</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default table;
