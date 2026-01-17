/*
Simple LocalStorage Playground
Demonstrates basic localStorage operations

Developed by sudo_0xksh
*/

let key = prompt("Enter key you want to set:");
let value = prompt("Enter value you want to set:");

// Store value
localStorage.setItem(key, value);

// Read value
console.log(`The value at "${key}" is:`, localStorage.getItem(key));

// Conditional removal
if (key === "red" || key === "blue") {
    localStorage.removeItem(key);
    console.log(`Key "${key}" removed from localStorage`);
}

// Clear storage condition
if (key == 0) {
    localStorage.clear();
    console.log("localStorage cleared");
}
