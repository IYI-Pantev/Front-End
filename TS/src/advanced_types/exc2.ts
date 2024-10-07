// define type aliases to use object mixins

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

const fSquirrel: Pet = {
  fly: () => console.log("flying squirrel"),
};
