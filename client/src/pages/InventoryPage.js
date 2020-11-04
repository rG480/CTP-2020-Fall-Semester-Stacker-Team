import React from 'react';

function InventoryPage(props) {
  return (
    <div className="content">
        <div>
            <p className="collection-name">Collection Name</p>
        </div>
        <div className="inventory">
        {/* Replacing with data table or a material table   */}
        <table className="inventory-table">
            <tr className="header">
                <th>Name</th>
                <th>Qty</th>
                <th>Date Added</th>
                <th>Price Bought</th>
                <th>Current Price (Average)</th>
                <th>Description</th>
            </tr>
        </table>
        </div>
    </div>
  );
}

export default InventoryPage;