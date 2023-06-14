import Concept from "./Concept";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {/* {console.log(props.content[0])} */}
      <Concept
        title={props.content[0].title}
        description={props.content[0].description}
        image={props.content[0].image}
      />
      <Concept
        title={props.content[1].title}
        description={props.content[1].description}
        image={props.content[1].image}
      />
      <Concept
        title={props.content[2].title}
        description={props.content[2].description}
        image={props.content[2].image}
      />
    </ul>
  );
};

export default Concepts;
