import React from "react";

export default function FileInput({ onChange }) {
  const ref = React.createRef();

  function handleChange(event) {
    event.preventDefault();
    let file = ref.current.files[0];
    onChange(file);
  }

  return (
    <label>
      Upload file:
      <input onChange={handleChange} type="file" ref={ref} />
    </label>
  );
}
