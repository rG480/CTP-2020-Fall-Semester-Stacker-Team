import React from 'react';
import ItemList from '../components/ItemList';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';


function InventoryGridPage(props) {
  return (
    <div className="row flex-row flex-nowrap overflow-auto justify-content-md-center">
        <div className="col-2">
            <UserInfo />
        </div>
        <div className="col-8">
            <ItemListBox />
        </div>
    </div>

  );
}

export default InventoryGridPage;