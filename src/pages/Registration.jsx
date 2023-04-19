import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Registration() {
  const [UserID, setUserID] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://sneaker-sphere-api.herokuapp.com/userinformation?UserID=${UserID}`)
      .then((res) => {
        if (res.data.data.length > 0 && res.data.data[0].UserID === UserID) {
          alert("User already exists with that ID.");
        } else {
          const data = { UserID, Name, Address, Email };
          axios
            .post("https://sneaker-sphere-api.herokuapp.com/userinformation", data)
            .then((res) => {
              console.log(res.data);
              alert("Registration successful!");
              setUserID("");
              setName("");
              setAddress("");
              setEmail("");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const goBack = () => {
    navigate(-1);
  };


    return (
      <div className="bg-gray-900 flex justify-center items-center h-screen">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <h2 className="text-center text-white text-3xl font-bold uppercase mb-4">Registration</h2>
          <p className="text-center text-white font-semibold uppercase mb-4">UserID should be 4-char in length</p>

          <div className="flex flex-wrap -mx-3 mb-6 mt-10">
            <div className="w-full px-3 text-center">
              <label
                htmlFor="userID"
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              >
                UserID
              </label>
              <input
                type="text"
                id="userID"
                name="userID"
                value={UserID}
                onChange={(event) => setUserID(event.target.value)}
                className="appearance-none block max-w-xs mx-auto bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 text-center">
              <label
                htmlFor="name"
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={Name}
                onChange={(event) => setName(event.target.value)}
                className="appearance-none block max-w-xs mx-auto bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 text-center">
              <label
                htmlFor="address"
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={Address}
                onChange={(event) => setAddress(event.target.value)}
                className="appearance-none block max-w-xs mx-auto bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6 md:mb-0 text-center">
      <label
        htmlFor="email"
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
        className="appearance-none block max-w-xs mx-auto bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center text-center">
    <div className="w-full px-3 mb-6">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-5 rounded"
        onClick={goBack}
        >
        Go Back
      </button>
    </div>
  </div>
  </form>
  </div>
    );
}

export default Registration;

