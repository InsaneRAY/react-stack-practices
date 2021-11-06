import { ChangeEvent, ChangeEventHandler } from "react";

interface Props {
  value: string | number;
  onChange: (value: string) => void;
}

const ControlledInput: React.FC<Props> = ({ value, onChange }) => {
  const handleChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

  return (
    <input value={value} onChange={handleChange} />
  );
}

export default ControlledInput;
