import Part from './Part';

const Content = ({ content: { parts, id } }) => {
  // console.log(props);
//   console.log(parts);
  return parts.map((part) => <Part part={part} key={id}/>);
};

export default Content;
