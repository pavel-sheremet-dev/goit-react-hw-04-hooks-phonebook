import { InputName, Label, InputField } from "../input/Input.styled";

const Filter = ({ filterText, onChange }) => {
  return (
    <Label>
      <InputName>Find contacts by name</InputName>
      <InputField
        type="text"
        name="filter"
        onChange={onChange}
        value={filterText}
        placeholder="Enter search name"
        autoComplete="off"
      />
    </Label>
  );
};

export default Filter;
