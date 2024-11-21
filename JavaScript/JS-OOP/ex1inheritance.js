function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    items.push(item);
  };
  this.removeItem = function (remItem) {
    // this.items.splice(this.items.indexOf(remItem), 1, "test");
    this.items = items.filter((item) => item !== remItem);
  };
}

HtmlSelectElement.prototype = new HtmlElement(); //Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
