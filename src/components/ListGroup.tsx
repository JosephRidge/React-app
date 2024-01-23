function ListGroup() {
  let items = ["New York", "San Francisco", "Toyko", "London", "Paris"];

  // advanatages of using functions over variables is that we can pas parameters
  const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null;
  };

  // returns a JSX Markup
  /* Conditional rendering */
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  return (
    /**
     *
     * <></> or <Fragment></Fragment> are tactics used by react to return a multiple elements
     */
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Item Found</p>:null} */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => {
              console.log(event);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// to use this component we export default component
export default ListGroup;
