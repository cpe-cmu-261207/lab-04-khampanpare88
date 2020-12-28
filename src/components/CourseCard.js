export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <div className = "bg-blue-100 rounded-2xl p-1  hover:bg-red-200">
  <p>{props.name}</p>
  <p>{props.grd}</p>
  <p>{props.crd}</p>
  <button onClick = {() =>props.del(props.name)} > -delete- </button>
  </div>;
};