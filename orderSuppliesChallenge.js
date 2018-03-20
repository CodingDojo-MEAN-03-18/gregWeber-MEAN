


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
    let items = [];
    // let numOrders = 0
    function receivedItem(orderId, item){
        //pushes an object to items array
        items.push({ orderId, 
            'item' : `Received ${item.product} time to ${item.directions()}`
        });
        // console.log(numOrders);
        // console.log(items.length === numOrders, items.length, numOrders);
        // console.log(numOrders);
            if (items.length === numOrders){
                //get order correct now that the order has been filled -- sort by order id
                // console.log(items)
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
//  when supplies are ordered give them a sequential id --> match up when we recieve to get correct order of expected return.
// function orderTracker takes a quantity of the order about to be placed and wraps around the receivedItem function.
// by invoking orderTracker, recievedItem gets exposed to global scope.

orderTracker(2);
orderSupplies(0, 'paint', receivedItem);
orderSupplies(1, 'brush', receivedItem);


orderTracker(5);
orderSupplies(1, 'paint', receivedItem);
orderSupplies(2, 'brush', receivedItem);
orderSupplies(3, 'brush', receivedItem);
orderSupplies(4, 'brush', receivedItem);
orderSupplies(5, 'brush', receivedItem);

//helper function that compiles the list of orders and sends to the orderSupplies warehouse | numOfOrders isn't necessarily a quantity 
// - that could be added if you wanted to do something with displaying a quantity or kkeeping track of inventory. numOrders is 1 num per order.
// function orderMaker(...orders){
//     // call the wearhouse and place order;
//     function placeOrder(orderList){
//         for (order of orderList){;
//             // console.log(order);
//             orderSupplies(order[0], order[1], order[2]);
//         }
//     }
//     // console.log(orderTracker);
//     //call ordertracker to tell them to be on the look out for upcoming order returns
//     this.orderLength = orders.length;
//     // console.log(orders.length);
//     orderTracker(2);
//     // console.log(orders);
//     placeOrder(orders);
// }



// // place order (numOrders, ...orders)
// orderMaker([1, 'paint', receivedItem], [2, 'brush', receivedItem]);
