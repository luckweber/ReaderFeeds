
angular.module('ServiceFeedCRUD')
  .service('serviceFeed', function($location, $window, $stateParams) {

    this.add = function (scope, ids) {

      if(localStorage.getItem('loglevel:webpack-dev-server') != null){
          localStorage.removeItem('loglevel:webpack-dev-server');
      }

      var id = 0;

      if(ids == null){


        var orderArray  = [];
        if(localStorage.length > 0 ){

            for(let result in localStorage){
                orderArray.push(result);
            }

            var orderArrayFinal = orderArray.sort();

            for(let  i = orderArrayFinal.length-1; i < orderArrayFinal.length; i++){
                id = orderArrayFinal[i];
                id++;
            }

        }else{
            id = 1;
        }
      }else{
        id = ids;
      }
      var  feed  = {
          id      : id,
          name    : scope.title,
          url     : scope.url,
          content : scope.content
      }

      var stringObj = JSON.stringify(feed);
      localStorage.setItem(String(id), JSON.stringify(feed));
      $location.url("/dashboard");

    }


    this.show = function(){
      let  list = [];
      if(localStorage.getItem('loglevel:webpack-dev-server') != null){
          localStorage.removeItem('loglevel:webpack-dev-server');
      }

      for(let result in localStorage){
          list.push(JSON.parse(localStorage.getItem(String(result))));
      }
      return list;
    }

    this.delete = function(){
      var a = $stateParams.id;



      localStorage.removeItem(String(a));
      $location.url("dashboard");
    }


    this.edit = function(){
      var a = $stateParams.id;
      return JSON.parse(localStorage.getItem(String(a)));
    }

  }
);
