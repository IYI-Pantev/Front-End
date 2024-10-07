// document - object loaded in the browser

let phone = <HTMLInputElement>document.getElementById("phone"); // as HTMLInputElement;

// HTMLElement
//HTMLInputElement

// assertions is used to
//telling the compiler which exact object is
//<HTMLInputElement>
//BUT IF PHONE IS NULL --> ERROR
phone.value;
