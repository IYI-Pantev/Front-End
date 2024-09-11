function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>Cities to visit!</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
