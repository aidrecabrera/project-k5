import React, { useState } from "react";

const EndpointList = ({
  options,
  onSelect,
}: {
  options: any;
  onSelect: any;
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select
      className="font-medium mt-7 border border-black text-black"
      value={selectedOption}
      onChange={handleChange}
    >
      <option value="" disabled>
        Select an endpoint
      </option>
      {options.map((endpoint: string, index: number) => (
        <option key={index} value={endpoint}>
          {endpoint}
        </option>
      ))}
    </select>
  );
};

export default EndpointList;
