
function CardComponent() {
  return (
    <div className="card">
      <div className="card-body p-1">
        <img className="card-img img-fluid rounded-0 my-3" src="https://tinyurl.com/f8cpy5bt" alt="Card Background" />
        <div className="mx-2 mb-4">
          <h2 className="card-title">A Dummy blog title sample</h2>
          <p className="card-text text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
