import React from "react";
import Table from "./../Table/Table"
import TableHeader from "./../TableHeader/TableHeader"
import { useState, useEffect } from "react";
import { getApplicant } from "./../../Service/api";

function List(props) {
  const [ applicantData, setApplicantData ] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  }

  return (
    <div>
      
      <div className="row" style={{ width: "100%" }}>
        <div className="col-12">
          <TableHeader/>
          {applicantData.map((info,i)=>(
            <Table index={i} FirstName={info.FirstName} LastName={info.LastName} Password={info.Password} Birthday={info.Birthday} Email={info.Email} Gender={info.Gender} PhoneNumber={info.PhoneNumber} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
