import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginLottie from "../../assets/Lottie/53888-login-icon.json";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [errorMessage, setErrorMessage] = useState(null)
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const { logIn } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    logIn(data.email, data.password)
      .then((userCredential) => {
      if(userCredential){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Logged in',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, {replace: true})
      }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === 'auth/user-not-found') {
          // Display specific error message for user not found
          setErrorMessage('User not found using this email.');
        } else if (errorCode === 'auth/wrong-password') {
          // Display specific error message for wrong password
          setErrorMessage('Wrong password. Please try again.');
        } else {
          // Display general error message for other errors
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="text-center lg:text-left">
            <Lottie
              className="md:w-96 h-56 md:h-96"
              animationData={loginLottie}
              loop={true}
            />
          </div>
        </div>
        <div className="card flex-shrink-0 md:w-6/12 shadow-2xl bg-base-100">
          <h3 className="mt-4 ms-6 font-bold text-3xl text-center">
            Please Login
          </h3>
          {
              errorMessage && <p className='text-red-500 text-lg text-center font-bold mt-4'>{errorMessage}</p>
            }
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email", { required: true})} 
              name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
               {errors.email && <span className='text-red-600'>Email is required</span>}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*\W)(?!.* )/ })} type={showPassword ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered" />
              {
                  showPassword ? <p onClick={()=>{setShowPassword(!showPassword)}} className='me-3 absolute top-14 cursor-pointer -right-0 '><AiOutlineEyeInvisible /></p> : <p onClick={()=>{setShowPassword(!showPassword)}} className='me-3 absolute top-14 cursor-pointer -right-0'><AiFillEye /></p>
                }
               {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
              {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters long.</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have 1 uppercase & 1 special character.</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ms-4">
            Dont have account?
            <span className="text-blue-600">
              <Link to="/signUp">Create Now</Link>
            </span>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
