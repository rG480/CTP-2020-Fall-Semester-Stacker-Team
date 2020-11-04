import React from 'react';


function Item() {
  return (
    <div className="col-4 col-md-3 col-lg-2">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <p>Castlevania</p>
        </div>
        <div className="card-footer small text-muted text-right">
          <p>$10.00</p>
        </div>
      </div>
    </div>
  );
}

export default Item;