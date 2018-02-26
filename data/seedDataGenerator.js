const seedJson = require('./seedData.json');

// brand property
const brandelelectronic = ['Samsumg', 'LG', 'Apple', 'Sony', 'Roku', 'Amazon', 'Logitech', 'NVDIA'];
const brandhome = ['Furniture', 'Home Decor', 'Bed & Bath', 'Lighting', 'Storage & Orgamization', 'Floor Care', 'Heating & Cooling', 'Pet Supplies'];
const brandmovie = ['Daddy\'s Home 2', 'A Bad Moms Christmas', 'Blade Runner 2049', 'Jumanji: Welcome to the Jungle', 'Fifty Shades Darker', 'Ocean\'s Thirteen', 'Logan\'s Run', '3rd World Hero (Bayaning Third World)', 'Town That Dreaded Sundown', 'Emerald Cowboy', 'Tai-Pan', 'Subspecies IV: Bloodstorm', 'Stormheart', 'Clue', 'First Blood (Rambo: First Blood)', 'Syndromes and a Century (Sang sattawat)', 'Of Gods and Men (Des hommes et des dieux)', 'The Monkey King', 'Red Rock West', 'Violette', 'A Matador\'s Mistress', 'Common', 'Blackadder Back & Forth', 'Re-Animator', 'Vanya on 42nd Street', 'Sweet Home Alabama', 'These Girls', 'Deadly Advice', 'Gun Woman', 'Blow Out', 'Stingray Sam', 'A Life in Dirty Movies'];
const brandclothing = ['adidas', 'Calvin Klein', 'Carhartt', 'Champion', 'Columbia', 'Dickies', 'Dockers', 'Kenneth Cole REACTION', 'Lacoste', 'NIKE', 'O\'Neill', 'PAUL JONES', 'RVCA', 'Under Armour'];
const brandoutdoor = ['Camping & Hiking', 'Climbing', 'Cycling', 'Skate', 'Winter Sports', 'Water Sports'];
const brandtoy = ['Star Wars', 'Pokemon', 'Marvel', 'Magic the Gathering', 'Yu-Gi-Oh!', 'Barbie', 'Nerf'];
const brandautomotive = ['Brake System', 'Exhaust System', 'Filters', 'Fuel System', 'Ignition Parts', 'Shocks & Struts', 'Suspension', 'Body & Trim', 'Brake System', 'Exhaust System', 'Filters', 'Lighting', 'Shocks & Struts', 'Suspension & Chassis', 'Wiper Blades'];
const brandgrocery = ['Baby Foods', 'Beverages', 'Breads & Bakery', 'Breakfast Foods', 'Candy & Chocolate', 'Canned, Jarred & Packaged Foods', 'Condiments & Salad Dressings', 'Cooking & Baking', 'Dairy, Cheese & Eggs', 'Deli', 'Dried Beans, Grains & Rice', 'Food & Beverage Gifts', 'Fresh Flowers & Live Indoor Plants', 'Fresh Meal Kits', 'Frozen', 'Herbs, Spices & Seasonings', 'Jams, Jellies & Sweet Spreads', 'Meat & Seafood', 'Olives, Pickles & Relishes', 'Packaged Meals & Side Dishes', 'Pasta & Noodles', 'Prepared Foods', 'Produce', 'Sauces', 'Gravies & Marinades', 'Snack Foods', 'Soups', 'Stocks & Broths', 'Wine'];
const brandbeauty = ['Dove', 'Gillette', 'Oral B', 'Q-Tips', 'Crest', 'Neutrogena', 'Remington', 'Colgate', 'Aveeno'];
const brandbook = ['Say You\'re Sorry (Morgan Dane Book 1)', 'The Dead Key', 'The Fire Next Time', 'A Criminal Defense (Philadelphia Legal)', 'Secondborn: Secondborn, Book 1', 'West Cork', 'White Rose, Black Forest', 'Silent Victim', 'Bone Music (The Burning Girl Series Book 1)', 'The Tuscan Child', 'Before We Were Yours: A Novel', 'The Chef and the Slow Cooker', 'Love from The Very Hungry Caterpillar', 'First 100 Words', 'Goodnight Moon'];

// model property
const modelelelectronic = ['S305 series', 'MU6300 series', 'X900E series', 'C7 OLED series', 'Fire TV Stick with Alexa Voice Remote', 'Roku Express | 5X more powerful HD Streaming', 'Apple TV - 32GB (4th Generation)'];
const modelhome = ['Table', 'Chair Sets', 'Bar Stools', 'Bed Frame', 'Rug', 'Vase', 'Mirror', 'Pillows', 'Towels', 'Matress', 'Blanket', 'Pressure Washer', 'Lamp', 'Light Bulbs'];
const modelmovie = ['Debora Machans', 'Willamina Kisby', 'Alasdair Alderman', 'Stevana Crate', 'Lyndel Conti', 'Hillyer Edge', 'Wash Jent', 'Pierette Gregon', 'Margaretta Tompkin', 'Brock Nitti', 'Sadella Pacher', 'Karel Camacho', 'Morissa Itzkin', 'Thorsten Shuard', 'Gill Pickvance', 'Shawna Barensen', 'Thelma Ivankovic', 'Natividad Feehily', 'Merilee Towriss', 'Alden Bishell', 'Jeremias Pettitt', 'Abigail Ouldred', 'Emmalynn Portch', 'Staford Gourdon', 'Maddalena Eseler', 'Lev Imlach', 'Claudius Bulloch', 'Milt Boucher', 'Geoff Aynsley', 'Rodrique Semmens', 'Dori Onians', 'Teri Walduck', 'Erinn Westman', 'Gabby Arnold', 'Diena Airlie', 'Steward Duggon', ' Claudell Locard', 'Anabel Popping', 'Corry Pigford', 'Cole Funcheon', 'Chlo Liletd', 'Alfonse Zupo', 'Meredeth Francesc', 'Danny Allison', 'Fair McCloughlin'];
const modelclothing = ['Shirts', 'Fashion Hoodies & Sweatshirts', 'Sweaters', 'Jackets & Coats', 'Jeans', 'Pants', 'Shorts', 'Active', 'Swim', 'Suits & Sport Coats', 'Underwear', 'Socks', 'Sleep & Lounge', 'T-Shirts & Tanks', 'Shoes', 'Jewelry', 'Watches'];
const modeloutdoor = ['Backpacks', 'Tents & Shelters', 'Sleeping Bags', 'Camp Kitchen', 'Camping Furniture', 'Knives & Tools', 'Lights & Lanterns', 'Safety & Survival', 'Trekking Poles', 'Bike'];
const modeltoy = ['Action Figures & Statues', 'Arts & Crafts', 'Baby & Toddler Toys', 'Building Toys', 'Dolls & Accessories', 'Kids Electronics', 'Games', 'Grown-Up Toys', 'Hobbies', 'Learning & Education', 'Novelty & Gag Toys', 'Party Supplies', 'Puppets', 'Puzzles', 'Sports & Outdoor Play', 'Stuffed Animals & Plush Toys', 'Video Games'];
const modelautomotive = ['parts', 'interior accessories', 'tools & equipment', 'car care', 'wheels'];
const modelgrocery = ['Wine - Toasted Head', 'Bacardi Mojito', 'Crab - Claws', 'Danishes - Mini Cheese', 'Breakfast Quesadillas', 'Icecream', 'Shrimp - 21/25, Peel And Deviened', 'Beef - Eye Of Round', 'Figs', 'Bread - White, Unsliced', 'Cheese - Parmesan Cubes', 'Potatoes - Mini White 3 Oz', 'Flower - Potmums', 'Chips Potato All Dressed - 43g', 'Versatainer Nc - 888', 'Bacon Strip Precooked', 'Crackers - Water', 'Veal - Tenderloin, Untrimmed', 'Salt - Seasoned', 'Beef - Outside, Round', 'Cassis', 'Caviar - Salmon', 'Cheese - Feta', 'Barley - Pearl', 'Longos - Chicken Curried', 'Muffins - Assorted'];
const modelbeauty = ['Makeup', 'Skin Care', 'Hair Care', 'Fragrance', 'Foot, Hand & Nail Care', 'Tools & Accessories', 'Shave & Hair Removal', 'Personal Care', 'Oral Care'];
const modelbook = ['Eoin Dempsey', 'Caroline Mitchell', 'Christopher Rice', 'Rhys Bowen', 'Lisa Wingate', 'Matthew Wade', 'Hugh Acheson', 'Roger Priddy', 'Margaret Wise Brown, Clement Hurd', 'Eric Carle', 'Giles Andreae, Guy Parker-Rees'];

// shipping property
const shipping = ['Free Shipping', 'Regular Shipping', 'Same-Day Delivery', 'One Day Shipping'];

// inStock property
const stock = [true, false];

// description property
const description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed tempus odio nec neque porta, nec sagittis lorem ullamcorper.', 'Sed nec odio lacinia, rhoncus sapien letius, bibendum sapien.',
  'Cras ut sem vel lectus rhoncus imperdiet a at leo.', 'Maecenas congue leo at tempor lacinia.', 'Morbi nec felis sagittis, pharetra lorem quis, pretium nulla.', 'Quisque efficitur leo sed lacus egestas sagittis.', 'Donec eu lacus sed lacus elementum bibendum non sed magna.', 'Etiam a risus luctus, lacinia dui in, varius lorem.', 'Etiam ut augue sed justo eleifend ullamcorper.', 'Sed ut dolor in nibh laoreet posuere non quis nunc.', 'Vestibulum id odio vel turpis dictum commodo.', 'Nullam id metus imperdiet, bibendum urna condimentum, aliquet elit.', 'Suspendisse sit amet erat vitae quam vestibulum finibus.'];

// random index generator
const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random integer between two values
const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

// random integer
const getOneRandomInt = max => Math.ceil(Math.random() * Math.ceil(max));

// return an array of random description
const randomDescription = () => {
  const result = [];
  while (result.length < getOneRandomInt(20)) {
    result.push(randomElement(description));
  }
  return result;
};

// data generator
const mapping = arr => arr.map((item) => {
  const prop = item;
  if (prop.type === 'Grocery') {
    prop.brand = randomElement(brandgrocery);
    prop.model = randomElement(modelgrocery);
    prop.price = getRandomInt(1, 100);
  }
  if (prop.type === 'Home/Garden') {
    prop.brand = randomElement(brandhome);
    prop.model = randomElement(modelhome);
    prop.price = getRandomInt(10, 3000);
  }
  if (prop.type === 'Outdoors') {
    prop.brand = randomElement(brandoutdoor);
    prop.model = randomElement(modeloutdoor);
    prop.price = getRandomInt(10, 2000);
  }
  if (prop.type === 'Movies') {
    prop.brand = randomElement(brandmovie);
    prop.model = randomElement(modelmovie);
    prop.price = getRandomInt(5, 30);
  }
  if (prop.type === 'Books') {
    prop.brand = randomElement(brandbook);
    prop.model = randomElement(modelbook);
    prop.price = getRandomInt(1, 20);
  }
  if (prop.type === 'Electronics') {
    prop.brand = randomElement(brandelelectronic);
    prop.model = randomElement(modelelelectronic);
    prop.price = getRandomInt(1, 2500);
  }
  if (prop.type === 'Beauty') {
    prop.brand = randomElement(brandbeauty);
    prop.model = randomElement(modelbeauty);
    prop.price = getRandomInt(10, 100);
  }
  if (prop.type === 'Toys') {
    prop.brand = randomElement(brandtoy);
    prop.model = randomElement(modeltoy);
    prop.price = getRandomInt(10, 100);
  }
  if (prop.type === 'Clothing') {
    prop.brand = randomElement(brandclothing);
    prop.model = randomElement(modelclothing);
    prop.price = getRandomInt(10, 300);
  }
  if (prop.type === 'Automotive') {
    prop.brand = randomElement(brandautomotive);
    prop.model = randomElement(modelautomotive);
    prop.price = getRandomInt(50, 3500);
  }
  prop.shipping = randomElement(shipping);
  prop.stock = randomElement(stock);
  prop.description = randomDescription();
  return prop;
});

module.exports = {
  randoEl: randomElement,
  randoInt: getRandomInt,
  oneRandoInt: getOneRandomInt,
  randoDes: randomDescription,
  mappingFunc: mapping,
  mapp: mapping(seedJson),
};
