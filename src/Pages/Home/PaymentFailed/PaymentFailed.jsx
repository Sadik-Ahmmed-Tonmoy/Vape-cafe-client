import { Link, useParams } from "react-router-dom";


const PaymentFailed = () => {
        
    const transactionId = useParams()
    return (
        <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-4xl text-red-500">Payment Failed</p>
         <p>Transaction id: {transactionId.id}</p>
     {/* <Link to="/"> <button className="btn">Home</button></Link> */}
     </div>
    );
};

export default PaymentFailed;