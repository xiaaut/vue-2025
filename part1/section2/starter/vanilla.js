const inputEl = document.querySelector(".input-text");
const pEl = document.querySelector(".p-text");

inputEl.addEventListener("input", (e) => {
    pEl.textContent = e.target.value;
});
