function ListGroup() {
  // Describing the UI
  // JSX(Javascript XML): Syntax combining JS and HTML
  //JSX: Javascript XML
  // creating dynamic content
  return (
    <div>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </div>
  );
}

// to use this component we export default component
export default ListGroup;
