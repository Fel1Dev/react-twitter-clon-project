import { Li } from "./Li";

const RenderCollection = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Li key={note.id}>
            {note.content}
          </Li>
        ))}
      </ul>
    </div>
  );
};

export default RenderCollection;
