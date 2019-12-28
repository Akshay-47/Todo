import React, { useState } from "react";

import Modal from "./Modal";

const actions = (
  <div>
    <button onClick={() => console.log("Save Clicked")}>Save</button>
    <button onClick={() => console.log("Cancel")}>Cancel</button>
  </div>
);

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onDismiss = () => {
    setIsOpen(false);
  };
  return (
    <div className="tab-section">
      <ul>
        <li>All</li>
        <li>Pending</li>
        <li onClick={() => setIsOpen(true)}>Completed</li>
      </ul>
      <Modal
        show={isOpen}
        title="I am modal"
        content="What can I do"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};
export default Tabs;
