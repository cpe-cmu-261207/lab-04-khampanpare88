export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <div className = "bg-blue-900 rounded-2xl p-1  hover:bg-gray-300 text-yellow-500 hover:text-black">
  <p>{props.name}</p>
  <p>{props.grd}</p>
  <p>{props.crd}</p>
  <p className="text-right"> <button onClick = {() =>props.del(props.name)} > -delete- </button></p>
  </div>;
};