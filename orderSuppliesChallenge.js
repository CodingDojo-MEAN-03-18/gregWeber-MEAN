

function orderSupplies(item, callback) {

    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;

    setTimeout(function() {
        warehouse = {
            paint: {
                id : 1,
                product: 'Neon Green Paint',
                directions: function() { return 'mix it!' }
            },
            brush: {
                id:2,
                product: 'Horsehair brush',
                directions: function() { return 'start painting!' }
            },
            beer: {
                id : 3,
                product: 'Craft IPA',
                directions: () => 'open and enjoy'
            },
            pizza: {
                    id : 4,
                    product: "Savory delicious pizza",
                    directions: () => 'take a break and have a slice'
                }
            };
        callback(warehouse[item]);
    }, deliveryTime);
    
}


//tracks received items /sorts received order/ console.logs the returns in the correct order 
//takes in number of items ordered as argument
function orderTracker(numOrders){

    let items = [];

    function receivedItem(item){
        // console.log(item);
        //pushes an object to items array
        items.push({ 
            id : item.id,
            message : `Received ${item.product} time to ${item.directions()}`
        });
        
        if (items.length === numOrders){
            //sorts and logs items in correct order once order is full
            items.sort((a,b) => (a.id - b.id)).forEach(element => console.log(element.message));
        }
    }

    return receivedItem;
};


// helper function that compiles the list of orders and sends to the orderSupplies warehouse | also generates number of orders to 
// be expected so we can stage the returns and deliver them all once the order is full
function orderMaker(...orders){
    
    const receivedItemChecker = orderTracker(orders.length); //the return from order trackers is the blueprint of its method receivedItems --> this will get passed into orderSupplies as a callback on each item it orders
    // call the wearhouse and place order;
    for (const element of orders){;
        orderSupplies(element, receivedItemChecker);
    }
}


// send items to orderMaker - here the order doesn't matter because we will run a sort on id in the reveived items method in orderTracker
orderMaker('paint', 'beer',  'brush', 'pizza');




//<<<---old sort method from the received items finction (got refactored to functional programing style)--->>>
//get order correct now that the order has been filled -- sort by order id
// let temp;
// let needsSort = true;
// while(needsSort){
    //     needsSort = false; 
    //     for (index = 0; index < items.length-1; index++){
        //         if (items[index].id > items[index + 1].id){
            //             needsSort = true;
            //             //swap
            //             temp = items[index];
            //             items[index] = items[index + 1];
            //             items[index + 1] = temp;
            //         }
            //     }
            // }
            // now that the order is correct we can deliver the items
            // items.sort(function(a,b){
                //     console.log(a,b);
                //     return a.id - b.id
                // })
                // .forEach(function(element){
                    //     console.log(element.message);
                    // })
                    