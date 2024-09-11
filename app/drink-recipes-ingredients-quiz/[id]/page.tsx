"use client";
import { drinks } from "@/data/drink-recipe-easy-questions";
import { alcohol, glass, nonalcohol, garnish } from "@/data/drink-ingredients";
import DrinkCheckbox from "@/components/DrinkCheckbox";
import { useState } from "react";
import Link from "next/link";
import RadioInput from "@/components/RadioInput";
function Page({ params }: { params: { id: string } }) {
  const drink = drinks.find((item) => item.id == params.id);
  const drinkAlcohol = drink?.alcohol.map((item) => item.type);
  const drinkGlass = drink?.glass;
  const drinkNonalcohol = drink?.nonalcohol.map((item) => item.type);
  const drinkGarnish = drink?.garnish;
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedGlass, setSelectedGlass] = useState<string>("");
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false);
  const [message, setMessage] = useState<JSX.Element | string>("");
  const handleLiquorCheckboxChange = (name: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleRadioChange = (name: string) => {
    setSelectedGlass(name);
    setSelectedIngredients((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sortedDrinkAlcohol = [
      drinkGlass,
      ...(drinkAlcohol ?? []),
      ...(drinkNonalcohol ?? []),
      ...(drinkGarnish ?? []),
    ].sort();
    const sortedSelectedIngredients = [...selectedIngredients].sort();

    const correct =
      sortedDrinkAlcohol.length === sortedSelectedIngredients.length &&
      sortedDrinkAlcohol.every(
        (item, index) => item === sortedSelectedIngredients[index]
      );
    if (correct) {
      setMessage(<span className="text-green-500 text-3xl">Correct!</span>);
    } else {
      setMessage(
        `Sorry, that's incorrect. ${drink?.name} contains ${sortedDrinkAlcohol} `
      );
    }
    setQuestionAnswered(true);
  };
  return (
    <div>
      <Link href="/">
        <button className="border-2 border-black p-2 text-3xl">
          Return Home
        </button>
      </Link>
      <h2 className="text-5xl text-center my-10">{drink?.name}</h2>

      <form onSubmit={handleSubmit}>
        <p className="text-center text-3xl my-10 underline">
          Please select the correct glass for this drink.
        </p>
        <div className="text-center mx-auto flex flex-wrap justify-center gap-2 max-w-[900px]">
          {glass.map((item) => {
            return (
              <RadioInput
                key={item}
                name={item}
                handleRadioChange={handleRadioChange}
                selectedGlass={selectedGlass}
              />
            );
          })}
        </div>
        <p className="text-center text-3xl my-10 underline">
          Please select the correct alcohol(s) for this drink.
          {drinkAlcohol && drinkAlcohol.length > 1
            ? ` There are ${drinkAlcohol?.length} choices`
            : ` There is ${drinkAlcohol?.length} choice`}
        </p>
        <div className="text-center mx-auto flex flex-wrap justify-center gap-2 max-w-[900px]">
          {alcohol.map((item) => {
            return (
              <DrinkCheckbox
                key={item}
                name={item}
                handleCheckboxChange={handleLiquorCheckboxChange}
                checked={selectedIngredients.includes(item)}
              />
            );
          })}
        </div>
        <p className="text-center text-3xl my-10 underline">
          Please select the correct non-alcohol for this drink.
          {drinkNonalcohol && drinkNonalcohol.length > 1
            ? ` There are ${drinkNonalcohol?.length} choices`
            : ` There is ${drinkNonalcohol?.length} choice`}
        </p>
        <div className="text-center mx-auto flex flex-wrap justify-center gap-2 max-w-[900px]">
          {nonalcohol.map((item) => {
            return (
              <DrinkCheckbox
                key={item}
                name={item}
                handleCheckboxChange={handleLiquorCheckboxChange}
                checked={selectedIngredients.includes(item)}
              />
            );
          })}
        </div>
        <p className="text-center text-3xl my-10 underline">
          Please select the correct garnish for this drink.
          {drinkGarnish && drinkGarnish.length > 1
            ? ` There are ${drinkGarnish?.length} choices`
            : ` There is ${drinkGarnish?.length} choice`}
        </p>
        <div className="text-center mx-auto flex flex-wrap justify-center gap-2 max-w-[900px]">
          {garnish.map((item) => {
            return (
              <DrinkCheckbox
                key={item}
                name={item}
                handleCheckboxChange={handleLiquorCheckboxChange}
                checked={selectedIngredients.includes(item)}
              />
            );
          })}
        </div>
        <button
          className={`block mx-auto my-5 bg-black text-white py-5 px-20 text-3xl rounded-2xl ${
            questionAnswered ? "hidden" : ""
          }`}
        >
          Submit
        </button>
        <p className="text-2xl text-center my-10">{message}</p>
      </form>

      <div className="flex justify-center gap-x-5">
        <Link
          href={`/drink-recipes-ingredients-quiz/${
            Number(drink?.id) === 0 ? drinks.length - 1 : Number(drink?.id) - 1
          }`}
        >
          <button className="mx-auto my-5 bg-black text-white py-5 px-10 text-3xl rounded-2xl w-52">
            Previous
          </button>
        </Link>
        <Link
          href={`/drink-recipes-ingredients-quiz/${
            Number(drink?.id) === drinks.length - 1 ? 0 : Number(drink?.id) + 1
          }`}
        >
          <button className="mx-auto my-5 bg-black text-white py-5 px-10 text-3xl rounded-2xl w-52">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Page;
