


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



//takes in number of items ordered as argument
function orderTracker(quantity){
    let items = [];
    let receivedCount = 0;
    // let quantity = 0
        function receivedItem(orderId, item){
            //pushes an object to items array
            items.push({ orderId, 
                        'item' : `Received ${item.product} time to ${item.directions()}`
                        });
            // console.log(items);
            receivedCount++; //add 1 for every item received back and skip next block untill == quantity ordered
            if (receivedCount == quantity){
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
                    console.log(element.orderId, element.item);
                }
            }
        }
    this.receivedItem = receivedItem;  //exposes receivedItem function globally
}
    

// ordering instructions:
//  when supplies are ordered give them a sequential id --> match up when we recieve to get correct order of expected return.
// function orderTracker takes a quantity of the order about to be placed and wraps around the receivedItem function.
// by invoking orderTracker, recievedItem gets exposed to global scope.
orderTracker(4);
orderSupplies(0, 'paint', receivedItem);
orderSupplies(1, 'paint', receivedItem);
orderSupplies(2, 'brush', receivedItem);
orderSupplies(3, 'brush', receivedItem);
