import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginLottie from "../../assets/Lottie/53888-login-icon.json";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import saveUserToDB from "../../apis/saveUserToDB";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  const { createUser, updateUserNameAndImage } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key}`,
        formData
      )
      .then((response) => {
        const photo = response.data.data.display_url;
        createUser(data.email, data.password)
          .then((userCredential) => {
            const user = userCredential.user;
            if(user){
              updateUserNameAndImage(data.name, photo)
              .then(() => {
               saveUserToDB(user)
               navigate(from, { replace: true });
                  Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Signed Up",
                    showConfirmButton: false,
                    timer: 1500,
                  });
              }).catch(() => {
              
              });
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/user-not-found") {
              // Display specific error message for user not found
              setErrorMessage("User not found using this email.");
            } else if (errorCode === "auth/wrong-password") {
              // Display specific error message for wrong password
              setErrorMessage("Wrong password. Please try again.");
            } else if (errorCode === "auth/email-already-in-use") {
              // Display specific error message for wrong password
              setErrorMessage("This email is already in use");
            } else {
              // Display general error message for other errors
              setErrorMessage("An error occurred. Please try again later.");
            }
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <div className="text-center lg:text-left">
            <Lottie
              className="md:w-96 h-56 md:h-96"
              animationData={loginLottie}
              loop={true}
            />
          </div>
        </div>
        <div className="card flex-shrink-0 md:w-7/12 shadow-2xl bg-base-100">
          <h3 className="mt-4 ms-6 font-bold text-3xl text-center">
            Please SignUp
          </h3>
          {errorMessage && (
                <span className="text-red-500 text-lg text-center font-bold mt-4">
                  {errorMessage}
                </span>
              )}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="Your Image"
                name="image"
                className="file-input file-input-bordered w-full"
                accept="image/*"
              />
              {errors?.image?.type === "required" && (
                <span className="text-red-600">Image is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                placeholder="Your password"
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()]).*$/,
                    message:
                      "Password must contain at least one capital letter and one special character",
                  },
                })}
                className={`input input-bordered block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                placeholder="Confirm your password"
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className={`input input-bordered block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <p className="ms-4">
            Already have an account?{" "}
            <span className="text-blue-600">
              <Link to="/userLogin">Please Login</Link>
            </span>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
