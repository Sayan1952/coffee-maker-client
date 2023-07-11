import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const catagory = form.catagory.value;
    const details = form.details.value;
    const photo = form.photoUrl.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      catagory,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
          });
        }
      });

    form.reset();
  };
  return (
    <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-5xl font-semibold text-center">Add New Coffee</h2>
      <p className="text-center md:w-1/3 m-auto pt-5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className="flex flex-col items-center" onSubmit={handleAddCoffee}>
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
          />
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block btn-neutral max-w-4xl"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
