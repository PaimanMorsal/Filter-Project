import "./Card.css";
export default function Card(props) {
  const classesName = "Card " + props.className;
  return <div className={classesName}>{props.children}</div>;
}
