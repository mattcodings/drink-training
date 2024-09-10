"use client";
import { drinks } from "@/data/drink-recipe-easy-questions";
import { alcohol } from "@/data/drink-ingredients";
import DrinkCheckbox from "@/components/DrinkCheckbox";
import { useState } from "react";
import Link from "next/link";
function Page({ params }: { params: { id: string } }) {
  const drink = drinks.find((item) => item.id == params.id);
  const drinksAlcohol = drink?.alcohol.map((item) => item.type);
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false);
  const [message, setMessage] = useState<JSX.Element | string>("");
  const handleCheckboxChange = (name: string) => {
    setSelectedDrinks((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };
  console.log(drinksAlcohol);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected: ", selectedDrinks);
    const sortedDrinksAlcohol = [...(drinksAlcohol ?? [])].sort();
    const sortedSelectedDrinks = [...selectedDrinks].sort();
    const correct =
      sortedDrinksAlcohol.length === sortedSelectedDrinks.length &&
      sortedDrinksAlcohol.every(
        (item, index) => item === sortedSelectedDrinks[index]
      );
    if (correct) {
      setMessage(<span className="text-green-500 text-3xl">Correct!</span>);
    } else {
      setMessage(
        `Sorry, that's incorrect. ${drink?.name} contains ${drinksAlcohol} `
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
      <div className="flex justify-center text-2xl">
        <div className="">
          <p>
            <span className="font-bold">Glass:</span> {drink?.glass}
          </p>
          <p>
            <span className="font-bold">Ingredients:</span>{" "}
            {drink?.nonalcohol.map((item) => {
              return (
                <span key={item.type}>
                  {item.measurement} {item.type} |{" "}
                </span>
              );
            })}
          </p>
          <span className="font-bold">Process:</span>{" "}
          <span>***{drink?.process}***</span>
          <p>
            <span className="font-bold">Garnish:</span>{" "}
            {drink?.garnish.map((item) => {
              return <span key={item}>{item} | </span>;
            })}
          </p>
        </div>
      </div>
      <p className="text-center text-3xl my-10 underline">
        Please select the correct alcohol(s) for this drink.
        {drinksAlcohol && drinksAlcohol.length > 1
          ? ` There are ${drinksAlcohol?.length} choices`
          : ` There is ${drinksAlcohol?.length} choice`}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="text-center mx-auto flex flex-wrap justify-center gap-2 max-w-[900px]">
          {alcohol.map((item) => {
            return (
              <DrinkCheckbox
                key={item}
                name={item}
                handleCheckboxChange={handleCheckboxChange}
                checked={selectedDrinks.includes(item)}
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
          href={`/drink-recipes-alcohol-quiz/${
            Number(drink?.id) === 0 ? drinks.length - 1 : Number(drink?.id) - 1
          }`}
        >
          <button className="mx-auto my-5 bg-black text-white py-5 px-10 text-3xl rounded-2xl w-52">
            Previous
          </button>
        </Link>
        <Link
          href={`/drink-recipes-alcohol-quiz/${
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
