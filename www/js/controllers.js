angular.module('starter.controllers', [])


.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])


.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ServeisCtrl', function($scope,$state,$stateParams,$location, Camera ,$cordovaBarcodeScanner, $ionicPopup) {
 
    function alerta(msg) {
        var alertPopup = $ionicPopup.alert ({
            title: 'Task Garden',
            template: msg
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    }
    
    
    $scope.getPicture = function() {
            Camera.getPicture().then(function(imageURI) {
              console.log(imageURI);
            }, function(err) {
              console.err(err);
            });
          };
    
    $scope.scanQRCode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
         //chec if exist
        if( getServei(imageData.text)!=null)
            $state.go('serveidetail',{"serveiId":imageData.text,"modus":"edit"});
        else
            alerta("El codi" + imageData.text + " no es vàlid");
         console.log("Barcode Format -> " + imageData.format);
         console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    }
    
     $scope.scanQRCodeEND = function() {
         $cordovaBarcodeScanner.scan().then(function(imageData) {
         //chec if exist
         if($scope.serveiSelected.codi== imageData.text)
             $state.go("serveis");
         else 
              alerta("El codi" + imageData.text + " no es vàlid");
         console.log("Barcode Format -> " + imageData.format);
         console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    }
    
    
    
    $scope.testScan =function(codi) {
        if( getServei(codi)!=null)
            $state.go('serveidetail',{"serveiId":codi,"modus":"edit"});
        else
            alerta("El codi no es vàlid");
    }
    
    
     $scope.testScanEND =function(codi) {
        if($scope.serveiSelected.codi== codi)
        {
            $state.go('serveis');
        }else 
              alerta("El codi" + codi + " no es vàlid");
    }
    
    $scope.modus=$stateParams.modus;
   
    $scope.Tasques = [{Descripcio:'Tallar gespa'},{Descripcio:'Podar  arbres'},{Descripcio:'Fumigar'}]

    $scope.entrarServei=function() {
        $scope.modus="edit";
    
    };
    
    
   $scope.parametres=$stateParams;
    
    
function getServei(codi) {
    var pos=-1;
    for (t=0;t<$scope.ServeisActius.length;t++) {
        if($scope.ServeisActius[t].codi==codi)
            return $scope.ServeisActius[t];
    }
    return null;
}
    
    
    $scope.ServeisActius = [
    { codi: '112233445566', Client: 'Xavier Barrufet', Adressa: 'C/Jaume I 40', DataActiu:'20/11/2014' ,Prioritat:'Alta', Status:'Pendent', NumIncidencies:1,NumTasques:2,Tasques:[{Descripcio:'Tallar gespa',Status:'Pendent',Tipus:'Incidencia'},{Descripcio:'Podar  arbres',Status:'Pendent',Tipus:'Servei'},{Descripcio:'Fumigar',Status:'Pendent',Tipus:'Servei'}]},
    { codi: '665544332211', Client: 'Toni Duran', Adressa: 'C/Verge Montserrat 11', DataActiu:'13/02/2015', Prioritat:'Alta', Status:'Pendent',NumIncidencies:1,NumTasques:2,Tasques:[{Descripcio:'Tallar gespa',Status:'Pendent',Tipus:'Incidencia'},{Descripcio:'Podar  arbres',Status:'Pendent',Tipus:'Servei'},{Descripcio:'Fumigar',Status:'Pendent',Tipus:'Servei'}]},
    { codi: '332211665544', Client: 'Kevin Roldan', Adressa: 'C/Valencia 24', DataActiu:'17/01/2015', Prioritat:'Normal', Status:'Parcial', NumIncidencies:1,NumTasques:2,Tasques:[{Descripcio:'Tallar gespa',Status:'Pendent',Tipus:'Incidencia'},{Descripcio:'Podar  arbres',Status:'Pendent',Tipus:'Servei'},{Descripcio:'Fumigar',Status:'Pendent',Tipus:'Servei'}]}
  ];
 
 var sselected =    getServei( $stateParams.serveiId);
 if(sselected!=null)
     $scope.serveiSelected =  sselected;  

 
})

 

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
