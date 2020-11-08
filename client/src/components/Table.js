import React from 'react'
import MaterialTable from 'material-table'

function Table(){
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);


    const cols=[
        {title: "Item Name", field:"item_name"},
        {title: "Quantity", field:"item_qty"},
        {title: "Date Added", field:"date_added"},
        {title: "Price Bought", field:"price_bought"},
        {title: "Price Current", field:"price_current"},
        {title: "Description", field:"description"}
    ]

    const data =[
        {
            item_name:"Alien Movie Triple Pack",
            item_qty:1,
            date_added:"2020-12-12",
            price_bought:19.23,
            price_current:19.50,
            description:"Alien Triple Pack DVD from Rite Aid"
        },
        {
            item_name:"Godzill Triple Feature",
            item_qty:1,
            date_added:"2020-12-12",
            price_bought:19.23,
            price_current:19.50,
            description:"Godzilla DVD Pack from Rite Aid"
        }
    ] 


    return (
        <div>
            <MaterialTable title="Some Title"
            
            data={data}
            columns={cols}
            onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
            options={{
                rowStyle: rowData => ({
                backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                })
            }}
            />
        </div>
    );

}

export default Table;