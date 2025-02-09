// var n=4; //no of rows

// for(var i=1; i<=n; i++)
// {
//    console.log(' '.repeat(n-i),end=""); //print spaces
//    for(var j=1; j<=i; j++)
//    {
//     console.log(j);//to print the left side numbers
//    }
//    for( var j=i-1; j>=1; j--)
//    {
//     console.log(j);//to print the right side numbers
//    }
//    console.log('\n');
// }





// code given by the chatgpt


var n = 4; // Number of rows

for (var i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i); // Print spaces

    for (var j = 1; j <= i; j++) {
        row += j; // Print left side numbers
    }

    for (var j = i - 1; j >= 1; j--) {
        row += j; // Print right side numbers
    }

    console.log(row); // Print entire row at once
}
