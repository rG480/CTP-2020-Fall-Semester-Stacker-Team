import React from 'react';
import ItemGrid from '../components/ItemGrid';
import UserInfo from '../components/UserInfo';


function InventoryGridPage(props) {
  return (
    <div>
        <div className="float-left">
        <UserInfo />
        </div>
        <ItemGrid />
    </div>

  );
}

export default InventoryGridPage;