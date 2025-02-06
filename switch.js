let month = "apr"; // Input month

switch (month) {
    case "dec":
    case "jan":
    case "feb":
        console.log("It's Winter!");
        break;
    case "mar":
    case "apr":
    case "may":
        console.log("It's Spring!");
        break;
    case "jun":
    case "jul":
    case "aug":
        console.log("It's Summer!");
        break;
    case "sep":
    case "oct":
    case "nov":
        console.log("It's Autumn!");
        break;
    default:
        console.log("Invalid month!");
}
