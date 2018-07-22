$(function(){
    var items = ["Burger", "Pasta", "Coke"];
    prepareFood(1, items);
    function prepareFood(tablenum, items, callback){
        console.log("Preparing food for items ");
        console.log(items);
        serveFood(tablenum, items);
    }

    function serveFood(tablenum, items){
        console.log("Serving food for items");
        console.log(items);
    }
});