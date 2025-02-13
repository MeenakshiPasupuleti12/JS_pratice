function f1() {
    var a = [
        {
            name: "Joe",
            ph: 123785,
            email: "meena@gmail.com",
            Gender: "male"
        },
        {
            name: "Meena",
            ph: 2946744,
            email: "joe@gmail.com",
            Gender: "female"
        },
        {
            name: "Tarun",
            ph: 354657438,
            email: "tarun@gmail.com",  // Fixed typo (emaail → email)
            Gender: "male"
        },
        {
            name: "Sai",
            ph: 648658379,
            email: "sai@gmail.com",
            Gender: "male"
        },
        {
            name: "Nikki",
            ph: 6878792782,
            email: "Nikki@gmail.com",
            Gender: "female"
        }
    ];
    return a;  // Return the array so it can be accessed outside
}

let a = f1();  // Store the returned value in a variable

// Accessing object properties
console.log(a[0].name); // Output: Joe
console.log(a[1].email); // Output: joe@gmail.com
console.log(a[4].Gender); // Output: female
