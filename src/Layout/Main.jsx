import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  const navigation = useNavigation()

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
      {/* {loading && <progress className="progress w-72"></progress>} */}
        {navigation?.status === "loading" && <progress className="progress w-56"></progress>}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
