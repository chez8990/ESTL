// $(document).ready(function(){
// 	if ($("autoComplete"))
// 	new autoComplete({
// 		selector: "#autoComplete",
// 		placeHolder: "Search for Food...",
// 		data: {
// 			src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"]
// 		},
// 		resultsList: {
// 			noResults: (list, query) => {
// 				// Create "No Results" message list element
// 				const message = document.createElement("li");
// 				message.setAttribute("class", "no_result");
// 				// Add message text content
// 				message.innerHTML = `<span>Found No Results for "${query}"</span>`;
// 				// Add message list element to the list
// 				list.appendChild(message);
// 			},
// 		},
// 		resultItem: {
// 			highlight: {
// 				render: true
// 			}
// 		}
// 	});
	
// })
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
		source: fakedata, 
		// data: {
	
		// 	"jQuery": null,
	
		// 	"JavaScript": 'https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png',
	
		// 	"CSS": null,
	
		// 	"HTML": null,
	
		// 	"Bootstrap": 'https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png',
	
		// 	"Java": null,
	
		// 	"Python": null,
	
		// },
 
    });
 
  });
  
var fakedata = ['test1','test2','test3','test4','ietsanders'];