let a = Number(prompt("Enter row/column to print equalateral triangle"));

for(i=1; i<=a; i++){
    for(k=1; k<=a-i; k++){
	     document.write("&nbsp");
	}
    for(j=1; j<=i; j++){
	    	
		   document.write("*" + " ");
}
	document.write("<br>");
}