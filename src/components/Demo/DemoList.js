import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const sortedList = props.items.sort((a, b) => a - b);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
