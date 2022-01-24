import { InputName, Label, InputField } from "../input/Input.styled";
import React, { memo } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { useState, useEffect } from "react";

const Filter = ({ onFilterChange }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    onFilterChange(input);
  }, [input, onFilterChange]);

  const handleChange = (e) => setInput(e.target.value);

  return (
    <Label>
      <InputName>Find contacts by name</InputName>
      <InputField
        type="text"
        name="filter"
        onChange={handleChange}
        value={input}
        placeholder="Enter search name"
        autoComplete="off"
      />
    </Label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (value) => dispatch(changeFilter(value)),
});

export default connect(null, mapDispatchToProps)(memo(Filter));
