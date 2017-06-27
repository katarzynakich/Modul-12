var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
  	countriesList.empty();
resp.forEach(function(item){
   	$('<li>').text(item.name + ', ' + item.capital + ', ' + item.region + ', ' + item.languages + ', ' + item.currencies ).appendTo(countriesList);
   	for (var property in item) {
   		$('#table').append('<tr><td>'+property+'<td><td>'+item[property]+'<td></tr>');
   	}
});
}



