

function orderSupplies(item, callback) {
    //put in error handeling here for items ordered that are not carried or out of

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
        // beer: {
        //     id : 3,
        //     product: 'Craft IPA',
        //     directions: () => 'open ang enjoy'
        // },
        // pizza: {
            //     id : 4,
            //     product: "Savory delicious pizza",
            //     directions: () => 'take a break and have a slice'
            // }
        };
        callback(warehouse[item]);
    }, deliveryTime);
}


//tracks received items /sorts received order/ console.logs the returns in the correct order 
//takes in number of items ordered as argument
(function orderTracker(numOrders){

    this.orderTracker = orderTracker;
    this.numOrders = numOrders;
    let items = [];
    //better would be to sort them as we receive them with an insert at value 1 lower than or something like that, the way I do it below works well for short lists
    
    this.receivedItem = function(item){
        // console.log(item);
        //pushes an object to items array
        items.push({ 
            id : item.id,
            message : `Received ${item.product} time to ${item.directions()}`
        });

        if (items.length === this.numOrders){
                //get order correct now that the order has been filled -- sort by order id
                let temp;
                let needsSort = true;
                while(needsSort){
                    needsSort = false; 
                    for (index = 0; index < items.length-1; index++){
                        if (items[index].id > items[index + 1].id){
                            needsSort = true;
                            //swap
                            temp = items[index];
                            items[index] = items[index + 1];
                            items[index + 1] = temp;
                        }
                    }
                }
                // now that the order is correct we can deliver the items
                for (element of items){
                console.log(element.message);
                }
            }
        }
        return this;
})();

// helper function that compiles the list of orders and sends to the orderSupplies warehouse | also generates number of orders to 
// be expected so we can stage the returns and deliver them all once the order is full
function orderMaker(...orders){

    // call the wearhouse and place order;
    function placeOrder(orderList){
        for (element of orderList){;
            orderSupplies(element[0], element[1]);
        }
    }
    
    orderTracker(orders.length)
    placeOrder(orders);
}


// place order  as an array with 3 values each ( ...orders) needs order id for correct ordering for delivery
//would be better if the projucts had id's in the warehouse...

orderMaker(['paint', receivedItem], ['brush', receivedItem]);
// orderMaker(['brush', receivedItem], ['paint', receivedItem]);
// orderMaker(['paint', receivedItem], ['brush', receivedItem], ['beer', receivedItem]);
// orderMaker( ['pizza', receivedItem], ['beer', receivedItem], ['paint', receivedItem], ['brush', receivedItem] );

