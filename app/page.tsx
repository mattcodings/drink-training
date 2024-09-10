import Link from "next/link";

function Home() {
  return (
    <div className="w-96 mx-auto my-20 text-center">
      <Link
        href="/drink-recipes-alcohol-quiz/0"
        className="border-8 p-8 border-blue-500 font-bold text-2xl block my-20"
      >
        <button>Test on Acohol in Specialty Drinks</button>
      </Link>
      <Link
        href="/drink-recipes-ingredients-quiz/0"
        className="border-8 p-8 border-blue-500 font-bold text-2xl block my-20"
      >
        <button>Test on All Ingredients in Specialty Drinks</button>
      </Link>
      <Link
        href="/drink-measurements-quiz/0"
        className="border-8 p-8 border-blue-500 font-bold text-2xl block my-20"
      >
        <button>Test on Measurements</button>
      </Link>
    </div>
  );
}
export default Home;
