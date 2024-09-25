type AlcoholItem = {
  type: string;
  measurement: string;
};
type NonAlcoholItem = {
  type: string;
  measurement: string;
};
type Drink = {
  id: string;
  name: string;
  glass: string;
  alcohol: AlcoholItem[];
  nonalcohol: NonAlcoholItem[];
  process: string;
  garnish: string[];
};
export const drinks: Drink[] = [
  {
    id: "0",
    name: "Blackberry Refresher",
    glass: "Collins Glass",
    alcohol: [
      {
        type: "Grey Goose Vodka",
        measurement: "2oz",
      },
    ],
    nonalcohol: [
      {
        type: "Sage Simple Syrup",
        measurement: "1oz",
      },
      {
        type: "Lime Juice",
        measurement: "0.75oz",
      },
      {
        type: "Lemonade",
        measurement: "top off",
      },
    ],
    process:
      "Muddle 4-5 blackberries, shake and double strain over 3 round ice cubes",
    garnish: ["Lime Wheel", "Blackberry"],
  },
  {
    id: "1",
    name: "Hibiscus Mule",
    glass: "Copper Mule Mug",
    alcohol: [
      {
        type: "Tito's Vodka",
        measurement: "1.5oz",
      },
    ],
    nonalcohol: [
      {
        type: "Blueberry Hibiscus Simple Syrup",
        measurement: "1.5oz",
      },
      {
        type: "Lime Juice",
        measurement: "1oz",
      },
      {
        type: "Ginger Beer",
        measurement: "top off",
      },
    ],
    process: "Stir",
    garnish: ["Lime Wedge", "Blueberries"],
  },
  {
    id: "2",
    name: "Cucumber Collins",
    glass: "Collins Glass",
    alcohol: [
      {
        type: "Kettle One Vodka",
        measurement: "2oz",
      },
      {
        type: "St Germain Elderflower",
        measurement: "0.5oz",
      },
    ],
    nonalcohol: [
      {
        type: "Cucumber Simple Syrup",
        measurement: "1oz",
      },
      {
        type: "Lemon Juice",
        measurement: "0.75oz",
      },
      {
        type: "Soda Water",
        measurement: "top off",
      },
    ],
    process: "Stir",
    garnish: ["Cucumber Slice In Glass"],
  },
  {
    id: "3",
    name: "Spicy Margarita",
    glass: "Cocktail Glass",
    alcohol: [
      {
        type: "Casamigos Blanco",
        measurement: "1.5oz",
      },
      {
        type: "Grand Marnier",
        measurement: "1oz",
      },
    ],
    nonalcohol: [
      {
        type: "Calabrian Hot Honey",
        measurement: "1oz",
      },
      {
        type: "Lime Juice",
        measurement: "1.25oz",
      },
    ],
    process: "Shake and strain over new ice",
    garnish: ["Lime Wheel", "Tajin Rim"],
  },
  {
    id: "4",
    name: "Paloma",
    glass: "Collins Glass",
    alcohol: [
      {
        type: "Patron Blanco",
        measurement: "1.5oz",
      },
    ],
    nonalcohol: [
      {
        type: "Lime Juice",
        measurement: "0.75oz",
      },
      {
        type: "San Pellegrino Pompelmo",
        measurement: "top off",
      },
    ],
    process: "Muddle basil leaves, build and top with San Pellegrino Pompelmo",
    garnish: ["Lime Wheel", "Pinch of Salt"],
  },
  {
    id: "5",
    name: "The Last Word",
    glass: "Old Fashioned Glass",
    alcohol: [
      {
        type: "Tangueray Gin",
        measurement: "1.5oz",
      },
    ],
    nonalcohol: [
      {
        type: "Lemon Juice",
        measurement: "0.5oz",
      },
      {
        type: "Simple Syrup",
        measurement: "0.75oz",
      },
    ],
    process:
      "Smoke rosemary sprig and lemon wedge on wooden board. While it's smoking, shake and strain over ice",
    garnish: ["Cucumber Slice", "Cracked Pepper"],
  },
  {
    id: "6",
    name: "Sour Cherry Negroni",
    glass: "Old Fashioned Glass",
    alcohol: [
      {
        type: "Rehorst Gin",
        measurement: "1.5oz",
      },
      {
        type: "Tribuno Sweet Vermouth",
        measurement: "0.75oz",
      },
      {
        type: "Campari",
        measurement: "0.75oz",
      },
      {
        type: "Tattersall Sour Cherry",
        measurement: "0.75oz",
      },
    ],
    nonalcohol: [],
    process: "Build in beaker, add ice and stir. Strain over large ice cube.",
    garnish: ["Orange Peel", "Filthy Cherry"],
  },
  {
    id: "7",
    name: "Smoked Old Fashioned",
    glass: "Old Fashioned Glass",
    alcohol: [
      {
        type: "2xo Bourbon",
        measurement: "2oz",
      },
    ],
    nonalcohol: [
      {
        type: "Angostura Bitters",
        measurement: "3 dashes",
      },
      {
        type: "Brown Sugar Simple",
        measurement: "0.5oz",
      },
    ],
    process:
      "Smoke glass. While smoking, build old fashioned in beaker, add ice, stir and strain over large ice cube.",
    garnish: ["Filthy Cherry", "Orange Peel"],
  },
  {
    id: "8",
    name: "Bees Knees",
    glass: "Coupe Glass",
    alcohol: [
      {
        type: "Monkey 47 Gin",
        measurement: "1.5oz",
      },
    ],
    nonalcohol: [
      {
        type: "Lemon Juice",
        measurement: "0.75oz",
      },
      {
        type: "Honey Simple Syrup",
        measurement: "0.5oz",
      },
      {
        type: "Egg White",
        measurement: "1",
      },
    ],
    process:
      "Build in mixer, dry shake, shake with ice & double strain into glass",
    garnish: [],
  },
  {
    id: "9",
    name: "Pear Martini",
    glass: "Coupe Glass",
    alcohol: [
      {
        type: "Grey Goose La Poire",
        measurement: "1.25oz",
      },
      {
        type: "St Germain Elderflower",
        measurement: "0.75oz",
      },
      {
        type: "Secco",
        measurement: "top off",
      },
    ],
    nonalcohol: [
      {
        type: "Lime Juice",
        measurement: "0.25oz",
      },
    ],
    process: "Shake and Strain, top with secco",
    garnish: [],
  },
  {
    id: "10",
    name: "Lemon Drop Martini",
    glass: "Martini Glass",
    alcohol: [
      {
        type: "Vodka",
        measurement: "1.25oz",
      },
      {
        type: "Triple Sec",
        measurement: "0.75oz",
      },
    ],
    nonalcohol: [
      {
        type: "Simple Syrup",
        measurement: "0.75oz",
      },
      {
        type: "Lemon Juice",
        measurement: "0.75oz",
      },
      {
        type: "Lemonade",
        measurement: "top off",
      },
    ],
    process: "Shake and Strain",
    garnish: ["lemon twist"],
  },
  {
    id: "11",
    name: "Carribean Crush",
    glass: "Collins Glass",
    alcohol: [
      {
        type: "Captain Morgan",
        measurement: "1oz",
      },
      {
        type: "Malibu Rum",
        measurement: "1oz",
      },
      {
        type: "Blue Curacao",
        measurement: "1oz",
      },
    ],
    nonalcohol: [
      {
        type: "Sour Mix",
        measurement: "1oz",
      },
      {
        type: "Pineapple Juice",
        measurement: "4oz",
      },
    ],
    process: "Shake and pour",
    garnish: ["Tajin Rim", "Lemon", "Cherry"],
  },
  {
    id: "12",
    name: "Blood Orange Aperol Spritz",
    glass: "Red Wine Glass",
    alcohol: [
      {
        type: "Aperol",
        measurement: "2oz",
      },
      {
        type: "Secco",
        measurement: "2oz",
      },
    ],
    nonalcohol: [
      {
        type: "San Pellegrino Aranciata Rosso",
        measurement: "3oz",
      },
    ],
    process: "Build in glass and stir",

    garnish: ["Orange"],
  },
  {
    id: "13",
    name: "Mai Tai",
    glass: "Cocktail Glass",
    alcohol: [
      {
        type: "Malibu Rum",
        measurement: "1oz",
      },
      {
        type: "Captain Morgan",
        measurement: "1oz",
      },
      {
        type: "Meyers rum",
        measurement: "1oz",
      },
    ],
    nonalcohol: [
      {
        type: "Grenadine",
        measurement: "1oz",
      },
      {
        type: "OJ",
        measurement: "2oz",
      },
      {
        type: "Pineapple Juice",
        measurement: "1oz",
      },
    ],
    process: "Build in glass/layered",
    garnish: ["Orange", "Cherry"],
  },
  // {
  //   id: "14",
  //   name: "Mojito (Blackberry or Mango)",
  //   glass: "Cocktail Glass",
  //   alcohol: [
  //     {
  //       type: "Bacardi",
  //       measurement: "1oz",
  //     },
  //     {
  //       type: "Captain Morgan",
  //       measurement: "1oz",
  //     },
  //     {
  //       type: "Meyers rum",
  //       measurement: "1oz",
  //     },
  //   ],
  //   nonalcohol: [
  //     {
  //       type: "lime juice",
  //       measurement: "1oz",
  //     },
  //     {
  //       type: "OJ",
  //       measurement: "2oz",
  //     },
  //     {
  //       type: "Pineapple Juice",
  //       measurement: "1oz",
  //     },
  //   ],
  //   process:
  //     "Muddle 1 lime wedge & 6 mint leaves with either 5 blackberries or 1 oz of mango syrup. Shake and pour, top with club soda",
  //   garnish: ["Mint Sprig", "Lime Wedge"],
  // },
];
