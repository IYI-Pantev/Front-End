// if we want to constraint the
// type of input

function echo<T extends number | string>(value: T): T {
  return value;
}

echo("s");

interface Person5 {
  name: string;
}

function echo2<T extends Person5>(value: T): string {
  return `Hello ${value.name}`;
}
