/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var a = preferences;
	a.unshift(0);
	var total = 0;
	var trian = 0;
	delete a[0];
	for (var i = 1; i < a.length; i++) {
		var s1 = a[i];
		var p1 = a.indexOf(a[s1],s1);
		var s2 = a[s1];
		var p2 = a.indexOf(a[s2],s2);
		var s3 = a[s2];
		var p3 = a.indexOf(a[s3],s3);
		var s4 = a[p3];
		if (a[i] == 0 && a[i] == undefined) {
			continue;
		}
		else if (a[i] == i) {
			continue;
		}
		else if (p2 == -1 || p3 == -1 ) {
			continue;
		}
		else if (s1 == s2 || s3 == s4 ) {
			continue;
		}
		else if (p1 != s4) {
			continue;
		}
		else {
		a[a[i]] = "";
		a[i] = "";
		total += 1;								
		}
	}
	return total;
};
