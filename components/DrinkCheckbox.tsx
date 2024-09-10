"use client";
type DrinkCheckbox = {
  name: string;
  handleCheckboxChange: (name: string) => void;
  checked: boolean;
};
function DrinkCheckbox({ name, handleCheckboxChange, checked }: DrinkCheckbox) {
  return (
    <>
      <label className="cursor-pointer select-none ">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleCheckboxChange(name)}
          className="hidden"
        />
        <span
          className={`w-52 inline-block px-4 py-2 border-2 rounded-md transition-colors ${
            checked ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          {name}
        </span>
      </label>
    </>
  );
}
export default DrinkCheckbox;
