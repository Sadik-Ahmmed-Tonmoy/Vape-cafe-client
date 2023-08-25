import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import saveUserToDB from "../../apis/saveUserToDB";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Logged In',
                showConfirmButton: false,
                timer: 1500
              })
              saveUserToDB(result.user)
              navigate(from, {replace: true})
          }).catch(() => {
           
          });
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center mb-4">
                <button onClick={handleGoogleLogin} className="btn btn-circle">
<FcGoogle style={{ fontSize: '3rem' }}/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;