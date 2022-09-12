import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Loaded");
  print_text();
  add_data_button();
} else {
  console.log("Not loaded");
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function my_button_functionality() {
  console.log("hello world");
  document.getElementById("my-h1").innerHTML = "My notebook";
}

function print_text() {
  const ButtonPress = document.getElementById("my-button");
  ButtonPress.addEventListener("click", function () {
    my_button_functionality();
  });
}

function add_data_functionality() {
  const notebook = document.getElementById("notebook");
  let newLi = document.createElement("li");
  newLi.innerHTML = document.getElementById("text-entry").value;
  notebook.appendChild(newLi);
}

function add_data_button() {
  const AddDataButton = document.getElementById("add-data");
  AddDataButton.addEventListener("click", function () {
    add_data_functionality();
  });
}
