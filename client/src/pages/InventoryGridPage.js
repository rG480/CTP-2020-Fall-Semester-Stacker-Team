import React from 'react';
import ItemList from '../components/ItemList';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';


function InventoryGridPage(props) {
  return (
    <div className="row flex-nowrap overflow-auto justify-content-md-center">
        <div className="justify-left">
            <UserInfo />
        </div>
        <div className="col-9">
            <ItemListBox />
        </div>
    </div>
  
  );
}

export default InventoryGridPage;