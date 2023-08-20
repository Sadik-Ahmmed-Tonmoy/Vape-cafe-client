import axios from "axios";

const useSaveUserToDB = (user) => {
 const currentUser = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    role: "customer",
  };
  axios
    .post("http://localhost:5000/users", currentUser)
    .then((res) => console.log(res));
};

export default useSaveUserToDB;
