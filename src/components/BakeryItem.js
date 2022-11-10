// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
	return (
		<div>
            {/* <p> Some picture</p> */}
            <img src={props.image} style={{ width: 200, height: 200 }}></img>
        </div>
	);
}
