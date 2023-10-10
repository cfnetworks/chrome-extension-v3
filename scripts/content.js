var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
	if (divs[i].id) {
		// output all divs
		console.log(divs[i].id);
	}
}