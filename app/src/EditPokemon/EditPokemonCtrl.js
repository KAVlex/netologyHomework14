'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, $routeParams, PokemonsService) {

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
    });

    $scope.editPokemon = function({name, weight}) {
        $scope.updateSuccess = false;

        PokemonsService.editPokemon($scope.pokemon.objectId, { name, weight }).then(function(response) {
            $scope.updateSuccess = true;
        });

    }

});
