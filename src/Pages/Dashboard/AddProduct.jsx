import React from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.ProductName.value;
    const balance = form.ProductPrice.value;
    const about = form.details.value;
    const picture = form.picture.value;
    const Size = [form.ProductSize.value];

    const product = { name, balance, about, picture, Size };
    console.log(product);
    fetch(
      `https://repliq-e-commerce-server.vercel.app/
products`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("product added  successfully");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className=" flex justify-center m-3 p-3 bg-base-200">
        <form
          onSubmit={handleSubmit}
          className="mx-auto font-bold border border-black p-1 md:p-8"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Name"
                name="ProductName"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Price"
                className="input input-bordered"
                name="ProductPrice"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Size</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Size"
                className="input input-bordered"
                name="ProductSize"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">product Picture Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="picture Url"
                className="input input-bordered"
                name="picture"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Details"
                className="input input-bordered"
                name="details"
              />
            </label>
          </div>
          <button className="btn btn-secondary my-3"> submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
