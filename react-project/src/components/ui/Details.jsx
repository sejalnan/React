import React from "react";

//here users is props--users must be inside the curly braces
const Detail = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="card">
          <div className="details">
            <h2>
              {user.userdetails.id}.<span> {user.userdetails.name}</span>
            </h2>
            <p>Age:{user.userdetails.age}</p>
          </div>

          <div className="contacts">
            <div className="email">
              <a href="http://">Email: {user.contact.email}</a>
            </div>

            <div className="phone">
              <a href="tel:+">Phone : {user.contact.phone}</a>
            </div>

            <div className="address">
              {user.address.city},{user.address.country},{user.address.zipcode}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Detail;
