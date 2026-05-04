console.log("Hello AI!!");

// Function untuk mendapatkan input dari user
function getUserInput(message) {
  return prompt(message);
}

// Contoh penggunaan
const userName = getUserInput("Masukkan nama Anda:");
console.log("Halo, " + userName + "!");
