

function orderSupplies(orderId, item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
      callback(orderId, warehouse[item]);
    }, deliveryTime);
  }


//tracks received items /sorts received order/ console.logs the returns in the correct order 
//takes in number of items ordered as argument
(function orderTracker(numOrders){
    //for some reason _ couldn't get numOrders to pass into receivedItem function untill I did 'this' here and used this.numOrders in the conditional
    this.numOrders = numOrders;
    let items = [];

    function receivedItem(orderId, item){
        //pushes an object to items array
        items.push({ orderId, 
            'item' : `Received ${item.product} time to ${item.directions()}`
        });

        if (items.length === this.numOrders){
            // console.log(items.length === this.numOrders);
                //get order correct now that the order has been filled -- sort by order id
                let temp;
                let needsSort = true;
                while(needsSort){
                    needsSort = false; 
                    for (index = 0; index < items.length-1; index++){
                        if (items[index].orderId > items[index + 1].orderId){
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
                console.log(element.item);
                }
            }
        }
        this.receivedItem = receivedItem;  //exposes receivedItem function globally
        this.orderTracker = orderTracker;
})();



// ordering instructions:
// when supplies are ordered give them a sequential id --> match up when we recieve to get correct order of expected return.
// function orderTracker takes a quantity of the order about to be placed and wraps around the receivedItem function.
// by invoking orderTracker, recievedItem gets exposed to global scope.

// helper function that compiles the list of orders and sends to the orderSupplies warehouse | also generates number of orders to 
// be expected so we can stage the returns and deliver them all once the porder is full
function orderMaker(...orders){
    console.log(orders.length, 'in orderMaker');
    // call the wearhouse and place order;
    function placeOrder(orderList){
        for (order of orderList){;
            // console.log(order);
            orderSupplies(order[0], order[1], order[2]);
        }
    }
    orderTracker(orders.length);
    placeOrder(orders);
}


// place order  as an array with 3 values each ( ...orders) needs order id for correct ordering for delivery
orderMaker([1, 'paint', receivedItem], [2, 'brush', receivedItem]);
// orderMaker([1, 'paint', receivedItem], [2, 'brush', receivedItem], [3, 'brush', receivedItem]);
// orderMaker([1, 'paint', receivedItem], [2, 'paint', receivedItem], [3, 'brush', receivedItem], [4, 'brush', receivedItem], [5, 'brush', receivedItem], [6, 'brush', receivedItem], );

