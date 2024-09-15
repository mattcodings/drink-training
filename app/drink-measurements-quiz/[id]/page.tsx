"use client";
import { drinks } from "@/data/drink-recipe-easy-questions";
import { processList } from "@/data/drink-ingredients";
import Link from "next/link";
import { useState, FormEvent } from "react";

function Page({ params }: { params: { id: string } }) {
  const drink = drinks.find((item) => item.id == params.id);
  const drinkAlcohol = drink?.alcohol.map((item) => item.type) || [];
  const drinkNonalcohol = drink?.nonalcohol.map((item) => item.type) || [];
  const drinkIngredients = [...drinkAlcohol, ...drinkNonalcohol];
  const alcoholMeasurements =
    drink?.alcohol.map((item) => item.measurement) || [];
  const nonalcoholMeasurements =
    drink?.nonalcohol.map((item) => item.measurement) || [];
  const drinkMeasurements = [...alcoholMeasurements, ...nonalcoholMeasurements];
  const [processInput, setProcessInput] = useState<string>(
    "Shake and double strain over 3 round ice cubes"
  );
  const [message, setMessage] = useState<JSX.Element | string>("");
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false);
  const [measurementInput, setMeasurementInput] = useState<{
    [key: string]: string;
  }>(
    drinkAlcohol?.reduce((acc, alcohol) => {
      acc[alcohol] = "";
      return acc;
    }, {} as { [key: string]: string }) || {}
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted values:", measurementInput);
    console.log(drinkMeasurements);
    const inputs = Object.values(measurementInput);
    console.log(inputs);
    // const sortedInputs = inputs.sort();
    // const sortedDrinkMeasurements = drinkMeasurements?.sort();
    // console.log(sortedInputs);
    // console.log(sortedDrinkMeasurements);
    const correct =
      drink?.process === processInput &&
      drinkMeasurements.length === inputs?.length &&
      inputs.every((item, index) => item === drinkMeasurements[index]);
    function mergeArraysToMap(
      keys: string[],
      values: string[]
    ): { [key: string]: string } {
      if (keys.length !== values.length) {
        throw new Error("The number of keys and values must be the same.");
      }

      // Use reduce to create the key/value map
      const mergedMap: { [key: string]: string } = keys.reduce<{
        [key: string]: string;
      }>((map, key, index) => {
        map[key] = values[index];
        return map;
      }, {});

      return mergedMap;
    }

    const correctMeasurements = mergeArraysToMap(
      drinkIngredients,
      drinkMeasurements
    );
    let measurementsString = "";
    for (const [key, value] of Object.entries(correctMeasurements)) {
      measurementsString = measurementsString + `${key}: ${value} | `;
    }
    console.log(measurementsString);

    if (correct) {
      setMessage(<span className="text-green-500 text-3xl">Correct!</span>);
    } else {
      setMessage(
        `Sorry, that's incorrect. ${
          drink?.name
        } contains: ${measurementsString}. ${
          drink?.process ? `The process is  ${drink?.process}` : ""
        }`
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
          Please select the correct measurements for each ingredient.
        </p>
        <div className="flex flex-col">
          <div>
            {drinkIngredients?.map((item) => (
              <div key={item} className="flex items-center mb-4 w-96 mx-auto">
                <select
                  value={measurementInput[item]}
                  onChange={(e) =>
                    setMeasurementInput({
                      ...measurementInput,
                      [item]: e.target.value,
                    })
                  }
                  className="border-4 p-2 border-black rounded-xl mx-2"
                >
                  <option value="0.25oz">0.25</option>
                  <option value="0.5oz">0.5</option>
                  <option value="0.75oz">0.75</option>
                  <option value="1oz">1</option>
                  <option value="1.25oz">1.25</option>
                  <option value="1.5oz">1.5</option>
                  <option value="1.75oz">1.75</option>
                  <option value="2oz">2</option>
                  <option value="3oz">3</option>
                  <option value="4oz">4</option>
                  <option value="top off">top off</option>
                </select>
                <span className="font-semibold">OZ</span>
                <span className="mx-2 text-2xl">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-3xl my-10 underline">
            Please select the correct process for this drink.
          </p>

          <select
            value={processInput}
            onChange={(e) => setProcessInput(e.target.value)}
            className="w-96 mx-auto text-[1.25rem] rounded-lg border-2 border-black p-2 my-10"
          >
            {processList.map((process) => {
              return (
                <option key={process} value={process}>
                  {process}
                </option>
              );
            })}
          </select>
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
          href={`/drink-measurements-quiz/${
            Number(drink?.id) === 0 ? drinks.length - 1 : Number(drink?.id) - 1
          }`}
        >
          <button className="mx-auto my-5 bg-black text-white py-5 px-10 text-3xl rounded-2xl w-52">
            Previous
          </button>
        </Link>
        <Link
          href={`/drink-measurements-quiz/${
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
