var express = require('express');
var router = express.Router();

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

/* GET home page. */
router.get('/', function(req, res, next) {
    var name
    P.getPokemonByName('eevee') // with Promise
        .then(function(response) {
        console.log(response.forms[0].name);
        // name = response.forms[0].name;
        name = response.abilities[0].ability.name;
        res.render('pokemon', {title: name, pokemonname: name});
    })
    .catch(function(error) {
        console.log('There was an ERROR: ', error);
    });

  
});



module.exports = router;
