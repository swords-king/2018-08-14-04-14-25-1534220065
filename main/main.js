module.exports = function main() {
    var 
	    arr1 = [],
		arr2 = [],
		arr3 = [];
	var str = arguments[0];
	for (var x of str){
		var a = parseInt(x);
		switch(a){
			case 0:
				arr1.push('._.');
				arr2.push('|.|');
				arr3.push('|_|');
				break;
			case 1:
				arr1.push('...');
				arr2.push('..|');
				arr3.push('..|');
				break;
			case 2:
				arr1.push('._.');
				arr2.push('._|');
				arr3.push('|_.');
				break;
			case 3:
				arr1.push('._.');
				arr2.push('._|');
				arr3.push('._|');
				break;
			case 4:
				arr1.push('...');
				arr2.push('|_|');
				arr3.push('..|');
				break;
			case 5:
				arr1.push('._.');
				arr2.push('|_.');
				arr3.push('._|');
				break;
			case 6:
				arr1.push('._.');
				arr2.push('|_.');
				arr3.push('|_|');
				break;
			case 7:
				arr1.push('._.');
				arr2.push('..|');
				arr3.push('..|');
				break;
			case 8:
				arr1.push('._.');
				arr2.push('|_|');
				arr3.push('|_|');
				break;
			case 9:
				arr1.push('._.');
				arr2.push('|_|');
				arr3.push('..|');
				break;
		}
	}
	var str1 = arr1.join(' ');
	var str2 = arr2.join(' ');
	var str3 = arr3.join(' ');
    console.log(str1+'\n'+
	str2+'\n'+
	str3+'\n');
	return str1+'\n'+
	str2+'\n'+
	str3+'\n';
};