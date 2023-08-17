import axios from "axios";


const HighEnd = () => {
    axios.get("http://localhost:5000/products").then((data) => {
        console.log(data.data);
      })
    return (
        <div>
            HighEnd
        </div>
    );
};

export default HighEnd;