import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";

function List(props) {
  return (
    <div>
      
      <div className="row" style={{ width: "100%" }}>
        <div className="col-12">
          <TableHeader/>
          {props.iv.map((info,i)=>(
            <Table index={i} FirstName={info.FirstName} LastName={info.LastName} Password={info.Password} Birthday={info.Birthday} Email={info.Email} Gender={info.Gender} PhoneNumber={info.PhoneNumber} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
