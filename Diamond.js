var n = 4; // Change this for a bigger diamond

// Upper part of the diamond
for (var i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
}

// Lower part of the diamond
for (var i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
}
