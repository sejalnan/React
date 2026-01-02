import "./App.css";
import Detail from "./components/ui/Details.jsx";

function App() {
  const user1 = {
    userdetails: { name: "Sejal", age: 20, id: 1 },
    address: { country: "India", city: "Nagpur", zipcode: 440017 },
    contact: { phone: 7498358028, email: "sejaln@gmail.com" },
  };

  const user2 = {
    userdetails: { name: "Shweta", age: 22, id: 2 },
    address: { country: "India", city: "wardha", zipcode: 440011 },
    contact: { phone: 9498358008, email: "shweta@gmail.com" },
  };

  const user3 = {
    userdetails: { name: "Shreya", age: 21, id: 3 },
    address: { country: "India", city: "Saoner", zipcode: 440014 },
    contact: { phone: 9124352348, email: "shreyu@gmail.com" },
  };
  const users = [user1, user2, user3];

  return (
    <div className="cards">
      <Detail users={users} />
    </div>
  );
}

export default App;
