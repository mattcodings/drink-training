type RadioInputProps = {
  name: string;
  handleRadioChange: (name: string) => void;
  selectedGlass: string;
};
function RadioInput({
  name,
  handleRadioChange,
  selectedGlass,
}: RadioInputProps) {
  return (
    <>
      <label className="cursor-pointer select-none ">
        <input
          type="radio"
          name="glass"
          value={name}
          checked={selectedGlass === name}
          onChange={() => handleRadioChange(name)}
          className="hidden"
        />
        <span
          className={`w-52 inline-block px-4 py-2 border-2 rounded-md transition-colors ${
            selectedGlass === name ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          {name}
        </span>
      </label>
    </>
  );
}
export default RadioInput;
