import React from "react";

import TableList from "./TableList";
import Form from "./Form";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Summary</th>
        <th>Priority</th>
        <th>Created On</th>
        <th>Due Date</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

const Table = () => {
  return (
    <div>
      <table>
        <TableHeader />
        <TableList />
      </table>

      {/* <Form type="edit" /> */}
    </div>
  );
};

export default Table;
