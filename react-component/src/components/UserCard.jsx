import React from "react";
// Destrutured
const UserCard = ({ name, age = 34, status, hideage }) => {
  // const onlineStat = status ? "online" : "offline";
  return (
    <div>
      <p> Name : {name} </p>
      <p> {status ? "Online" : "Offline"} </p>
      {hideage && <p>{age}</p>}

      {/* {status && <p>Online</p>} // conditional rendering  */}
    </div>
  );
};

export default UserCard;
