import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, catagory, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const catagory = form.catagory.value;
    const details = form.details.value;
    const photo = form.photoUrl.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      catagory,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
          });
        }
      });

    form.reset();
  };

  return (
    <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-5xl font-semibold text-center">
        Update Coffee : {name}
      </h2>
      <p className="text-center md:w-1/3 m-auto pt-5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form
        className="flex flex-col items-center"
        onSubmit={handleUpdateCoffee}
      >
        <div className="pt-10 md:px-10 md:flex gap-28 justify-center">
          <div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text w-96 text-lg font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Name"
                className="input input-bordered"
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered"
                name="supplier"
                defaultValue={supplier}
              />
            </div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Catagory
                </span>
              </label>
              <input
                type="text"
                placeholder="Catagory"
                className="input input-bordered"
                name="catagory"
                defaultValue={catagory}
              />
            </div>
          </div>
          <div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text w-96 text-lg font-semibold">
                  Available Quantity
                </span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered"
                name="quantity"
                defaultValue={quantity}
              />
            </div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text text-lg font-semibold">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered"
                name="taste"
                defaultValue={taste}
              />
            </div>
            <div className="form-control pb-5">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Details
                </span>
              </label>
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered"
                name="details"
                defaultValue={details}
              />
            </div>
          </div>
        </div>
        <div className="form-control pb-5 w-full md:max-w-4xl">
          <label className="label">
            <span className="label-text text-lg font-semibold">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photoUrl"
            defaultValue={photo}
          />
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block btn-neutral max-w-4xl"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
