function printName<T extends { name: string }>(obj: T): void {
  console.log(obj.name);
}
