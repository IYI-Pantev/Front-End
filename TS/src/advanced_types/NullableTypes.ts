function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("admin123");
}

greet(null);
