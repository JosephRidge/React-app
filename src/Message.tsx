// Pascal Casing 

function Message(){
    // Describing the UI
    // JSX(Javascript XML): Syntax combining JS and HTML
    //JSX: Javascript XML
    // creating dynamic content
    const name = "Toto";
    if (name)
    return <h1>Hello World {name}</h1>; // gets compled to JS 
    return <h1>Hello World </h1>; // gets compled to JS 

}

// to use this component we export default component
export default Message;