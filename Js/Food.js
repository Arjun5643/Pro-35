function preload(){
    milk_img  = loadImage("Milk.png");
}
class Food{
    constructor(foodStock, lastFed){
        
    }
    getFoodStock(){
        var FoodStockref = database.ref("Food")
        FoodStockref.on("value", function(data){
          foodStock = data.val();  
        })
    }
    updateFoodStock(stock){
        database.ref("/").update({
          foodStock:stock 
        })
      }
      update(Food){
        var foodStock = "Food"+foodStock
        database.ref(Food).set({
            Food:foodS
        })
      }
}