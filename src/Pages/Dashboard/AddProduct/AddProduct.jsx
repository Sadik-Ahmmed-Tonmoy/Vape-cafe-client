import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from 'react';
import { Slide } from "react-awesome-reveal";

const AddProduct = () => {
const [loading, setLoading] = useState(false)
console.log(loading);
    const devices = ["High End", "Box Mods", "Starter Kits", "Pod System"];
  const atomizers = ["Rebuildables", "SUB-OHM Tanks"];
  const e_Liquids = ["Nicsalt", "Free Base"];
  const accessories = [
    "Replacement Coils, Pod & RBA",
    "Vape Accessories",
    "Rebuildable Materials",
    "Batteries & Chargers",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();
const productType = watch("productType")


  const onSubmit = (data) => {
    const allInfo = {
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        features: data.features,
        packageIncludes: data.packageIncludes,
        productType: data.productType,
    }
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_KEY
    }`;
    fetch(URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        
        const productInfo = {...allInfo, image: data.data.display_url};

        axios.post("https://vape-cafe-server.vercel.app/addProduct", productInfo).then((data) => {
            setLoading(false)
          if (data.data.insertedId){
            setLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
          }
          reset()
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full h-full">
        <div className="card w-full shadow-2xl bg-base-100 h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="text-center font-semibold text-3xl md:my-6">
              Add Items
            </h3>
            <div className="md:grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Product Price"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="file"
                  {...register("image")}
                  required
                  placeholder="Your Image"
                  name="image"
                  className="file-input file-input-bordered w-full"
                  accept="image/*"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select Product Type</span>
                </label>
                <select
                  {...register("productType", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
                 
                  <option>Device</option>
                  <option>Atomizer</option>
                  <option>E-Liquids</option>
                  <option>Accessories</option>
                  <option>Disposables</option>
                </select>
              </div>
              
{productType==="Device" &&   <Slide direction="right"><div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {devices.map((item,i)=> <option key={i}>{item}</option>)}
                </select>
              </div></Slide>}


{productType==="Atomizer" && <Slide direction="right"><div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {atomizers.map((item,i)=> <option key={i}>{item}</option>)}
                </select>
              </div></Slide>}
{productType==="E-Liquids" && <Slide  direction="right"><div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {e_Liquids.map((item,i)=> <option key={i}>{item}</option>)}
                </select>
              </div></Slide>}
{productType==="Accessories" && <Slide direction="right"><div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {accessories.map((item,i)=> <option key={i}>{item}</option>)}
                </select>
              </div></Slide>}
{productType==="Disposables" && <Slide direction="right"><div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true } )}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select One
                  </option>
               <option>Disposables</option>
                </select>
              </div></Slide>}
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  {...register("description", { required: true })}
                  className="textarea textarea-bordered"
                  placeholder="Product Details"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Features</span>
                </label>

                <textarea
                  type="text"
                  name="features"
                  {...register("features", { required: true })}
                  className="textarea textarea-bordered"
                  placeholder="Product features"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Package Includes</span>
                </label>

                <textarea
                  type="text"
                  name="packageIncludes"
                  {...register("packageIncludes", { required: true })}
                  className="textarea textarea-bordered"
                  placeholder="Product includes"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              {loading && <progress className="progress w-56 text-center m-3"></progress>}
              <input onClick={()=> setLoading(true)} className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
