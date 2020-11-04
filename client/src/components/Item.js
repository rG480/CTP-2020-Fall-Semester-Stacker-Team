import React from 'react';


function Item() {
  return (
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div className="card mb-3 shadow">
        <div className="card-body card-text">
          <p>Castlevania</p>
          <img alt="castle.jpg"></img>
        </div>
        <div className="card-footer small text-muted text-right">
          <p>$10.00</p>
        </div>
      </div>
    </div>
  );
}

export default Item;