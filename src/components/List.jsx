function List(props) {
    const category=props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
        <>
            <h1>{category}</h1>
            <ol>{listItems}</ol>
        </>);
}
export default List;