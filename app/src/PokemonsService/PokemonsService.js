angular
    .module('PokemonApp')
    .factory('PokemonsService', function ($http) {

            $http.defaults.headers.common = {
                "application-id": "B9CE46A9-7E97-DFA1-FF39-3AFE25BBEE00",
                "secret-key": "29C0795C-7BC9-58A1-FF8F-1620D9A62C00"
            };

            return {

                getPokemons: function () {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function (pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function (pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                deletePokemon: function (pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                }

            }

        }
    );
