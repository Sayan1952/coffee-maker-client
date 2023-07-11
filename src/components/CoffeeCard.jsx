const CoffeeCard = ({ coffee }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-active">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
