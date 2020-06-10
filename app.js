(function () {
  angular.module('ShoppingListCheckOff',[])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

          //To buy list
         	ToBuyController.$inject =['ShoppingListCheckOffService'];
         	function ToBuyController (ShoppingListCheckOffService)
          {
         		var buy = this;
         		buy.items = ShoppingListCheckOffService.toBuyItems();
         		buy.removeItem = function(itemIndex){
         			ShoppingListCheckOffService.bought(itemIndex);
         		};
         	}

          //Already bought list
        	AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
        	function AlreadyBoughtController (ShoppingListCheckOffService)
          {
        		var bought = this;
        		bought.items = ShoppingListCheckOffService.boughtItems();
        	}

          //Shopping list service
        	function ShoppingListCheckOffService()
          {
        		var service = this;
            var toBuyItems =
            [
              {name: "Cookies",
               quantity: 10
              },
              {name: "Chocolate",
               quantity: 3
              },
              {name: "Notebook",
               quantity: 5
              },
              {name: "Pens",
               quantity: 12
              },
              {name: "Mobile ",
               quantity: 1
              },
              {name: "BackPack",
               quantity: 1
              },
              {name: "Laptop",
               quantity: 4
              },
              {name: "Vegetables",
               quantity: 8
              },
              {name: "Table",
               quantity: 2
              },
              {name: "T-Shirts",
               quantity: 10
              },
              {name: "Soap",
               quantity: 5
              }
            ];

        		var boughtItems = [];

          	service.bought = function(itemIndex) {
          			boughtItems.push(toBuyItems[itemIndex]);
          			toBuyItems.splice(itemIndex, 1);
          	};

          	service.boughtItems = function() {
          			return boughtItems;
          	};

          	service.toBuyItems = function() {
          			return toBuyItems;
          	};
          }

})();
