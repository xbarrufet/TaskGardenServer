angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

.controller('ServeisCtrl', function($scope) {
  $scope.ServeisActius = [
    { id: 1, Client: 'Xavier Barrufet', Adressa: 'C/Jaume I 40', DataActiu:'20/11/2014' ,Prioritat:'Alta', Status:'Pendent', Tasques:[{Descripcio:'Tallar gespa',Status:'Pendent'},{Descripcio:'Podar  arbres',Status:'Pendent'},{Descripcio:'Fumigar',Status:'Pendent'}]},
    { id: 2, Client: 'Toni Duran', Adressa: 'C/Verge Montserrat 11', DataActiu:'13/02/2015', Prioritat:'Alta', Status:'Pendent', Tasques:[{Descripcio:'Tallar gespa',Status:'Pendent'},{Descripcio:'Podar  arbres',Status:'Pendent'},{Descripcio:'Fumigar',Status:'Pendent'}]},
    { id: 3, Client: 'Kevin Roldan', Adressa: 'C/Valencia 24', DataActiu:'17/01/2015', Prioritat:'Normal', Status:'Parcial', Tasques:[{Descripcio:'Tallar gespa',Status:'Acabat'},{Descripcio:'Podar  arbres',Status:'Acabat'},{Descripcio:'Fumigar',Status:'Pendent'}]}
  ];
       
  $scope.Serveis = [
    { id: 4, Client: 'Mike McGowan', Adressa: 'C/Diagonal 155', DataUltimServei:'17/01/2015', Tasques:[{Descripcio:'Tallar gespa'},{Descripcio:'Podar  arbres'},{Descripcio:'Fumigar'}]},
    { id: 5, Client: 'Tom Bones', Adressa: 'C/Muntaner 180', DataUltimServei:'17/01/2015', Tasques:[{Descripcio:'Tallar gespa'},{Descripcio:'Podar  arbres'},{Descripcio:'Fumigar'}]},
            ];
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
