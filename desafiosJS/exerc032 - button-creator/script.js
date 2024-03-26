const controles = document.getElementById("controles");
const css = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChage);

const handStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + "px";
    },
    width(value) {
        this.element.style.width = value + "px";
    },
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + "px";
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + "rem";
    },
};

function handleChage(event) {
    const name = event.target.name;
    const value = event.target.value;

    handStyle[name](value);
    showCss();
}

function showCss() {
    css.innerText =
        "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
