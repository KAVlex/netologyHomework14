'use strict';

pokemonApp.controller('PokemonListCtrl', function ($scope, $q, PokemonsService, BerriesService) {

    $scope.status = 'loading';

    $q.all([PokemonsService.getPokemons(), BerriesService.getBerries()])
        .then(function ([pokemons, berries]) {
            $scope.pokemons = pokemons.data.data;
            $scope.berries  = berries.data.data;

            $scope.status   = 'ready';
        });
});
