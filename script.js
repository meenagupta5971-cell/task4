// ===== TO-DO LIST WITH LOCAL STORAGE =====
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function displayTasks() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
}

function addTask() {
  let input = document.getElementById("todoInput");
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  tasks.push(input.value);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
  displayTasks();
}
displayTasks();

// ===== PRODUCT LISTING - FILTER & SORT =====
let products = [
  { name: "Laptop", category: "Electronics", price: 55000, rating: 4.8 },
  { name: "Headphones", category: "Electronics", price: 1999, rating: 4.5 },
  { name: "T-Shirt", category: "Fashion", price: 499, rating: 4.2 },
  { name: "Jeans", category: "Fashion", price: 999, rating: 4.4 },
  { name: "HTML Book", category: "Books", price: 399, rating: 4.9 },
  { name: "JS Book", category: "Books", price: 599, rating: 4.7 },
];

function showProducts() {
  let cat = document.getElementById("filterCategory").value;
  let sort = document.getElementById("sortBy").value;
  let filtered = products.filter(p => cat === "All" || p.category === cat);

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  let box = document.getElementById("productList");
  box.innerHTML = "";
  filtered.forEach(p => {
    box.innerHTML += `<div class="card"><h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: ₹${p.price}</p><p>Rating: ⭐ ${p.rating}</p></div>`;
  });
}
showProducts();

// ===== CONTACT FORM =====
function sendMessage(event) {
  event.preventDefault();
  document.getElementById("formMsg").innerText = "Thank you! Your message has been sent successfully ✅";
  document.getElementById("formMsg").style.color = "green";
  return false;
}