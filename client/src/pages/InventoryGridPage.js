import React from 'react';
import ItemList from '../components/ItemList';
import UserInfo from '../components/UserInfo';


function InventoryGridPage(props) {
  return (
    <div>
        <div className="float-left">
            <UserInfo />
        </div>
        <div className="float-right">
            <ItemList />
            <ItemList />
        </div>
    </div>

  );
}

export default InventoryGridPage;