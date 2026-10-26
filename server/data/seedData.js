const seedRestaurants = [
  // =========================================================================
  // 1. BIRYANI & MUGHLAI SPECIALISTS
  // =========================================================================
  {
    id: "rest-1",
    name: "Royal Biryani Darbar",
    description: "Authentic Dum Biryani, succulent kebabs and Nawabi gravies cooked in traditional earthen pots.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "1.8k+",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    deliveryTime: 28,
    priceForTwo: 350,
    distance: "2.4 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "50% OFF up to ₹100",
    deliveryFee: 0,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Nawabi Heritage Dining with live Ghazal on weekends",
      alcohol: false
    },
    address: { street: "100 Feet Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-101", name: "Hyderabadi Chicken Dum Biryani", price: 280, isVeg: false, rating: 4.8, description: "Aromatic basmati rice slow-cooked with tender marinated chicken pieces and saffron.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-102", name: "Shahi Paneer Tikka Biryani", price: 240, isVeg: true, rating: 4.5, description: "Charcoal grilled cottage cheese cubes layered over slow-cooked fragrant spiced rice.", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-103", name: "Tandoori Murgh (Half)", price: 260, isVeg: false, rating: 4.7, description: "Juicy chicken roasted in a clay tandoor oven with smoky spices.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-104", name: "Garlic Butter Naan", price: 45, isVeg: true, rating: 4.6, description: "Crisp tandoori flatbread topped with minced garlic and melted amul butter.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80", category: "Breads" },
      { id: "m-105", name: "Nawabi Gosht Mutton Biryani", price: 360, isVeg: false, rating: 4.9, description: "Tender chunks of baby goat slow-simmered in kewra water, caramelized onions and basmati.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-106", name: "Matka Shahi Kesar Phirni", price: 90, isVeg: true, rating: 4.8, description: "Traditional Kashmiri ground rice pudding flavored with green cardamom and saffron strands.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-9",
    name: "Meghana Spice Delights",
    description: "Legendary Andhra-style spicy chicken biryani, chili chicken, paneer 65, and lemon chicken.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "6.4k+",
    cuisines: ["Biryani", "Andhra", "South Indian"],
    deliveryTime: 22,
    priceForTwo: 380,
    distance: "1.9 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹100 OFF on ₹299+",
    deliveryFee: 0,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Bustling family restaurant with lightning-fast service",
      alcohol: false
    },
    address: { street: "5th Block, Koramangala", city: "Bengaluru", area: "Koramangala" },
    menu: [
      { id: "m-901", name: "Meghana Special Chicken Biryani", price: 295, isVeg: false, rating: 4.9, description: "Spicy Andhra boneless chicken pieces smothered over fragrant ghee-infused biryani rice.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-902", name: "Crispy Andhra Chili Chicken", price: 250, isVeg: false, rating: 4.8, description: "Fiery dry chicken cubes tossed in hot green chillies, curry leaves and pepper.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-903", name: "Paneer 65 Crispy Fry", price: 210, isVeg: true, rating: 4.6, description: "Deep fried battered cottage cheese cubes tempered with mustard seeds and curry leaves.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-904", name: "Boneless Mutton Roast Biryani", price: 380, isVeg: false, rating: 4.8, description: "Succulent boneless tender lamb pan-roasted with black pepper, served on rich biryani rice.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-905", name: "Tangy Lemon Chicken Gravy", price: 240, isVeg: false, rating: 4.7, description: "Zesty Andhra spiced chicken curry infused with fresh lime juice and crushed green chillies.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Curries" }
    ]
  },
  {
    id: "rest-17",
    name: "Nagarjuna Andhra Meals & Biryani",
    description: "Iconic traditional Andhra banana-leaf thalis, fiery chicken sholay kebab, and spicy mutton biryani.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "8.2k+",
    cuisines: ["Andhra", "Biryani", "South Indian"],
    deliveryTime: 26,
    priceForTwo: 450,
    distance: "3.2 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "20% OFF up to ₹80",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Traditional South Indian feast experience served on fresh banana leaves",
      alcohol: true
    },
    address: { street: "Residency Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-1701", name: "Nagarjuna Chicken Sholay Kebab", price: 275, isVeg: false, rating: 4.9, description: "Bite-sized chicken chunks coated in a crisp spicy batter, tossed with fried curry leaves.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1702", name: "Andhra Special Mutton Biryani", price: 370, isVeg: false, rating: 4.8, description: "Authentic Guntur spiced mutton with fragrant seeraga samba rice cooked to perfection.", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-1703", name: "Traditional Veg Banana Leaf Meal", price: 220, isVeg: true, rating: 4.7, description: "Unlimited hot rice, pappu dal, sambar, rasam, kootu, curd, spicy gunpowder and ghee.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-1704", name: "Guntur Crispy Chili Prawns", price: 360, isVeg: false, rating: 4.8, description: "Fresh coastal prawns sautéed in roasted red chili paste, garlic and shallots.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-18",
    name: "Behrouz Royal Biryani",
    description: "Royal Persian-inspired dum biryanis garnished with roasted dry fruits, saffron and rich royal spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: "3.7k+",
    cuisines: ["Biryani", "Mughlai", "Desserts"],
    deliveryTime: 30,
    priceForTwo: 500,
    distance: "2.8 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹125 OFF with BEHROUZ",
    deliveryFee: 0,
    category: ["Delivery"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Cloud kitchen delivery royal packaging",
      alcohol: false
    },
    address: { street: "27th Main, Sector 1, HSR Layout", city: "Bengaluru", area: "HSR Layout" },
    menu: [
      { id: "m-1801", name: "Dum Gosht Mutton Biryani (Persian)", price: 410, isVeg: false, rating: 4.9, description: "Slow dum-cooked tender mutton with aromatic long-grain basmati and golden fried almonds.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-1802", name: "Zaikedaar Paneer Dum Biryani", price: 290, isVeg: true, rating: 4.6, description: "Malai paneer marinated in royal yogurt and spices, layered with saffron basmati rice.", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-1803", name: "Murgh Tikka Mirza Ghalib", price: 280, isVeg: false, rating: 4.7, description: "Boneless chicken infused with coriander root and black cumin char-grilled in tandoor.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1804", name: "Shahi Angoori Gulab Jamun", price: 95, isVeg: true, rating: 4.8, description: "Melt-in-mouth baby gulab jamuns dunked in rose-scented cardamom syrup.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-19",
    name: "Paradise Dum Biryani & Kebabs",
    description: "Legendary Nizami biryani heritage since 1953, famous for delicate long grains and rich mirchi salan.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80",
    rating: 4.4,
    ratingCount: "5.1k+",
    cuisines: ["Biryani", "Hyderabadi", "Kebabs"],
    deliveryTime: 25,
    priceForTwo: 360,
    distance: "2.5 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Free Drink with Any Biryani Combo",
    deliveryFee: 20,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Spacious multi-level family dining with iconic Nizami artifacts",
      alcohol: false
    },
    address: { street: "New BEL Road", city: "Bengaluru", area: "New BEL Road" },
    menu: [
      { id: "m-1901", name: "Paradise Special Nizami Chicken Biryani", price: 285, isVeg: false, rating: 4.8, description: "The iconic Hyderabadi classic cooked with fresh whole spices, mint, and tender chicken.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80", category: "Biryani" },
      { id: "m-1902", name: "Silky Murgh Reshmi Kebab", price: 270, isVeg: false, rating: 4.7, description: "Boneless chicken marinated in cream, cashew paste, and light yellow chillies.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1903", name: "Hyderabadi Mutton Seekh Kebab", price: 310, isVeg: false, rating: 4.8, description: "Minced lamb blended with herbs and roasted cumin, skewered and tandoor-roasted.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1904", name: "Traditional Double Ka Meetha", price: 110, isVeg: true, rating: 4.6, description: "Crisp fried bread steeped in saffron-cardamom rabdi topped with roasted pistachios.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },

  // =========================================================================
  // 2. PIZZA, PASTAS & ARTISANAL ITALIAN
  // =========================================================================
  {
    id: "rest-2",
    name: "Artisan Pizza Works",
    description: "Woodfired Neapolitan pizzas made with Italian 00 flour, San Marzano tomatoes and fresh buffalo mozzarella.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: "2.3k+",
    cuisines: ["Pizza", "Italian", "Pastas"],
    deliveryTime: 24,
    priceForTwo: 450,
    distance: "1.8 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹120 OFF on ₹299+",
    deliveryFee: 25,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Charming Italian trattoria with open woodfired oven",
      alcohol: true
    },
    address: { street: "12th Main, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-201", name: "Classic Margherita Woodfired", price: 299, isVeg: true, rating: 4.7, description: "Fresh tomato sauce, buffalo mozzarella, fresh basil leaves and extra virgin olive oil.", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-202", name: "Smoky BBQ Chicken Pizza", price: 389, isVeg: false, rating: 4.8, description: "Smoky barbecue shredded chicken, caramelized red onions and gooey mozzarella.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-203", name: "Creamy Truffle Penne", price: 320, isVeg: true, rating: 4.6, description: "Penne tossed in silky parmesan cream sauce infused with white truffle essence and mushrooms.", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=500&auto=format&fit=crop&q=80", category: "Pastas" },
      { id: "m-204", name: "Four Cheese Quattro Formaggi", price: 399, isVeg: true, rating: 4.9, description: "Mozzarella, Gorgonzola, aged Parmesan and fresh Ricotta on crisp blistered crust.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-205", name: "Rosemary & Garlic Dough Balls", price: 160, isVeg: true, rating: 4.7, description: "Fluffy woodfired bread bites brushed with garlic butter and rosemary, with spicy marinara dip.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-10",
    name: "Brik Oven Pizzeria & Deli",
    description: "Famous sourdough crust pizzas, burrata salads, homemade dips and artisanal sodas.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "3.5k+",
    cuisines: ["Pizza", "Italian", "Desserts"],
    deliveryTime: 26,
    priceForTwo: 550,
    distance: "2.1 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "20% OFF on Woodfired Combos",
    deliveryFee: 20,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Cosy vintage brick-walled pizzeria buzzing with indie music",
      alcohol: false
    },
    address: { street: "Church Street", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-1001", name: "The Original Burrata Pizza", price: 440, isVeg: true, rating: 4.9, description: "Whole artisanal burrata crown over slow-cooked San Marzano tomato sauce and basil pesto.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-1002", name: "Pepperoni & Hot Honey Crust", price: 470, isVeg: false, rating: 4.8, description: "Crisp cups of pepperoni with mozzarella, parmesan and a spicy habanero honey drizzle.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-1003", name: "Truffle Garlic Knots with Aioli", price: 190, isVeg: true, rating: 4.7, description: "Tied sourdough dough knots tossed in garlic herb butter and grated parmesan.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1004", name: "Nutella & Sea Salt Chunky Cookie", price: 150, isVeg: true, rating: 4.9, description: "Warm gooey oven-baked cookie stuffed with molten Nutella and sprinkled with Maldon salt.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-20",
    name: "Toscano Ristorante & Wine Bar",
    description: "Fine-dining Italian experience at UB City with gourmet hand-rolled pastas, artisanal risottos, and wood-oven pizzas.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "4.3k+",
    cuisines: ["Italian", "Pizza", "Pastas"],
    deliveryTime: 32,
    priceForTwo: 900,
    distance: "3.5 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Complimentary Dessert on ₹999+",
    deliveryFee: 0,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Luxurious open-air piazza dining overlooking amphitheatre fountains",
      alcohol: true
    },
    address: { street: "UB City, Vittal Mallya Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-2001", name: "Ravioli di Zucca (Pumpkin Ravioli)", price: 420, isVeg: true, rating: 4.8, description: "Handmade pasta stuffed with roasted butternut squash, tossed in sage butter and toasted pine nuts.", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=500&auto=format&fit=crop&q=80", category: "Pastas" },
      { id: "m-2002", name: "Prosciutto Di Parma Pizza", price: 540, isVeg: false, rating: 4.9, description: "Cured Italian prosciutto, shaved aged parmigiano-reggiano and arugula on thin crust.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-2003", name: "Classic Italian Tiramisu", price: 290, isVeg: true, rating: 4.9, description: "Savoiardi ladyfingers soaked in espresso and marsala wine with airy mascarpone cream.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-2004", name: "Bruschetta Al Pomodoro", price: 240, isVeg: true, rating: 4.6, description: "Toasted country bread topped with diced ripe plum tomatoes, garlic, extra virgin olive oil.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-21",
    name: "Pizza Bakery & Sourdough Lab",
    description: "Slow-fermented sourdough pizzas, stuffed dough balls with herb butter, and authentic Neapolitan desserts.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "2.9k+",
    cuisines: ["Pizza", "Italian", "Desserts"],
    deliveryTime: 23,
    priceForTwo: 520,
    distance: "1.4 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹100 OFF with PIZZA100",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Hip European bistro vibe with craft beers and indie tunes",
      alcohol: true
    },
    address: { street: "100 Feet Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-2101", name: "Popo's Veggie Supreme Sourdough", price: 380, isVeg: true, rating: 4.7, description: "Roasted bell peppers, caramelized onions, kalamata olives, jalapeños and fior di latte.", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-2102", name: "Smoked Chicken Sausage & Fig Pizza", price: 460, isVeg: false, rating: 4.8, description: "Smoked sausage coins, dried mission figs, goat cheese dollops, and balsamic drizzle.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80", category: "Pizza" },
      { id: "m-2103", name: "Creamy Basil Pesto Potato Gnocchi", price: 340, isVeg: true, rating: 4.6, description: "Pillowy potato dumplings simmered in fresh genovese basil pesto and toasted walnuts.", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=500&auto=format&fit=crop&q=80", category: "Pastas" },
      { id: "m-2104", name: "Warm Belgian Dark Chocolate Fondant", price: 210, isVeg: true, rating: 4.9, description: "Molten dark chocolate cake oozing rich chocolate ganache, served warm.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },

  // =========================================================================
  // 3. BURGERS, GOURMET WINGS & COMFORT FOOD
  // =========================================================================
  {
    id: "rest-3",
    name: "The Burger Bar & Grill",
    description: "Gourmet smash burgers, loaded peri peri fries, thick milkshakes and crispy onion rings.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    rating: 4.4,
    ratingCount: "1.2k+",
    cuisines: ["Burgers", "Fast Food", "Beverages"],
    deliveryTime: 20,
    priceForTwo: 300,
    distance: "1.5 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "20% OFF on Burger Combos",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Retro American neon burger joint with arcade games",
      alcohol: false
    },
    address: { street: "7th Block, Koramangala", city: "Bengaluru", area: "Koramangala" },
    menu: [
      { id: "m-301", name: "Double Smash Cheeseburger", price: 249, isVeg: false, rating: 4.8, description: "Two seared crispy beef patties, double melted cheddar, grilled onions and secret house sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-302", name: "Crispy Buffalo Chicken Burger", price: 219, isVeg: false, rating: 4.6, description: "Buttermilk fried chicken breast dipped in tangy cayenne buffalo sauce with blue cheese slaw.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-303", name: "Truffle Parmesan Loaded Fries", price: 149, isVeg: true, rating: 4.7, description: "Crispy skin-on french fries tossed with truffle oil, garlic herbs and grated aged parmesan.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80", category: "Sides" },
      { id: "m-304", name: "Classic Salted Caramel Shake", price: 139, isVeg: true, rating: 4.5, description: "Thick hand-spun vanilla bean ice cream blended with homemade salted caramel drizzle.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Beverages" }
    ]
  },
  {
    id: "rest-11",
    name: "Truffles Cafe & Burgers",
    description: "The city's beloved comfort hangout famous for juicy cheese burgers, lasagna, Dutch truffle cake, and shakes.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "12.8k+",
    cuisines: ["Burgers", "Continental", "Desserts"],
    deliveryTime: 25,
    priceForTwo: 350,
    distance: "1.6 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Free Brownie on Orders Above ₹399",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out", "Cafes"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Vibrant multi-floor college hotspot with quick courteous service",
      alcohol: false
    },
    address: { street: "St. Marks Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-1101", name: "All American Cheese Burger", price: 195, isVeg: false, rating: 4.9, description: "Thick juicy lamb patty, melted cheddar slice, gherkins and dijon mayo on toasted brioche.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-1102", name: "Crispy Peri Peri Chicken Burger", price: 185, isVeg: false, rating: 4.8, description: "Golden fried panko chicken patty seasoned with fiery African bird's eye spice.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-1103", name: "Famous Dutch Truffle Pastry", price: 120, isVeg: true, rating: 4.9, description: "Dense, moist dark chocolate sponge enveloped in rich Dutch chocolate ganache.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-1104", name: "Ferrero Rocher Thick Shake", price: 175, isVeg: true, rating: 4.8, description: "Creamy chocolate hazelnut ice cream shake blended with real crunchy Ferrero truffles.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Beverages" }
    ]
  },
  {
    id: "rest-22",
    name: "Plan B Gastro Pub & Wings",
    description: "Famous for legendary spicy chicken wings with 10 sauce tiers, juicy craft burgers, and pub grub.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "4.7k+",
    cuisines: ["Burgers", "American", "Finger Food"],
    deliveryTime: 28,
    priceForTwo: 550,
    distance: "2.3 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Buy 12 Wings Get 6 Free",
    deliveryFee: 20,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Classic rock music, craft beer on tap, energetic rustic pub ambiance",
      alcohol: true
    },
    address: { street: "Castle Street, Ashok Nagar", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-2201", name: "Smoky Hickory BBQ Wings (12 pcs)", price: 340, isVeg: false, rating: 4.9, description: "Crisp fried jumbo chicken wings tossed in rich molasses hickory barbecue glaze.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-2202", name: "Juicy Lucy Cheese-Burst Burger", price: 310, isVeg: false, rating: 4.8, description: "Gourmet minced beef patty stuffed with a molten core of melted sharp cheddar cheese.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-2203", name: "Crispy Golden Onion Rings", price: 160, isVeg: true, rating: 4.5, description: "Beer-battered jumbo sweet onion rings served golden and crunchy with ranch dip.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80", category: "Sides" },
      { id: "m-2204", name: "Peri Peri Spiced Chicken Tenders", price: 260, isVeg: false, rating: 4.7, description: "Crispy chicken breast goujons dusted in zesty spicy peri peri dust.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-23",
    name: "Leon's Burgers & Wings",
    description: "Crispy chicken burgers, loaded peri peri fries, spicy tender strips, and refreshing coolers.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: "3.2k+",
    cuisines: ["Burgers", "Fast Food", "Finger Food"],
    deliveryTime: 18,
    priceForTwo: 280,
    distance: "1.2 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹75 OFF on ₹199+",
    deliveryFee: 10,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Quick casual dining with clean modern seating and speedy service",
      alcohol: false
    },
    address: { street: "11th Main, 4th Block, Jayanagar", city: "Bengaluru", area: "Jayanagar" },
    menu: [
      { id: "m-2301", name: "Leon's Royal Chicken Crisp Burger", price: 180, isVeg: false, rating: 4.7, description: "Juicy chicken breast filet crisped to perfection with shredded iceberg lettuce and tangy mayo.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80", category: "Burgers" },
      { id: "m-2302", name: "Loaded Peri Peri Crinkle Fries", price: 120, isVeg: true, rating: 4.6, description: "Deep-crinkle cut golden potatoes coated in bold peri-peri masala.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80", category: "Sides" },
      { id: "m-2303", name: "Fiery Hot Jumbo Wings (6 pcs)", price: 199, isVeg: false, rating: 4.8, description: "Crisp fried wings glazed with spicy sriracha garlic hot sauce.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },

  // =========================================================================
  // 4. SOUTH INDIAN HERITAGE & TIFFIN CORNERS
  // =========================================================================
  {
    id: "rest-4",
    name: "Udupi Krishna Grand",
    description: "Pure vegetarian traditional South Indian tiffins, paper-thin ghee dosas, filter coffee and wholesome thalis.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "3.1k+",
    cuisines: ["South Indian", "Fast Food", "Pure Veg"],
    deliveryTime: 16,
    priceForTwo: 180,
    distance: "1.1 km",
    pureVeg: true,
    hasOffer: false,
    offerText: "",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Traditional standing tiffin counter & serene air-conditioned family hall",
      alcohol: false
    },
    address: { street: "9th Main, Jayanagar 4th Block", city: "Bengaluru", area: "Jayanagar" },
    menu: [
      { id: "m-401", name: "Special Ghee Roast Masala Dosa", price: 95, isVeg: true, rating: 4.9, description: "Crispy golden crepe roasted in pure desi ghee, filled with spiced potato palya and served with 3 chutneys.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-402", name: "Melt-In-Mouth Thatte Idli (2 Pcs)", price: 60, isVeg: true, rating: 4.8, description: "Steaming hot plate-sized spongy fermented rice cakes topped with melting butter and gun powder.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-403", name: "Crispy Medu Vada (2 Pcs)", price: 55, isVeg: true, rating: 4.7, description: "Golden brown savory lentil fritters spiced with black peppercorns and fresh curry leaves.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-404", name: "Degree Filter Kaapi", price: 35, isVeg: true, rating: 4.9, description: "Strong traditional South Indian chicory blend coffee frothed in stainless steel dabarah tumbler.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80", category: "Beverages" }
    ]
  },
  {
    id: "rest-12",
    name: "CTR Shri Sagar & Dosa Corner",
    description: "Legendary heritage breakfast institution since 1920, renowned for thick crisp Benne Masala Dosa.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "15.2k+",
    cuisines: ["South Indian", "Fast Food", "Pure Veg"],
    deliveryTime: 18,
    priceForTwo: 160,
    distance: "2.9 km",
    pureVeg: true,
    hasOffer: false,
    offerText: "",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Vintage heritage dining with marble top tables and historic black-and-white photos",
      alcohol: false
    },
    address: { street: "Margosa Road, Malleshwaram", city: "Bengaluru", area: "Malleshwaram" },
    menu: [
      { id: "m-1201", name: "Legendary Benne Masala Dosa", price: 85, isVeg: true, rating: 5.0, description: "Crisp golden outside, pillowy inside, loaded with white churned butter and spicy red chutney.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-1202", name: "Crispy Mangalore Bajji (4 pcs)", price: 50, isVeg: true, rating: 4.7, description: "Fluffy fried fritters made with sour curd and ginger, served with coconut chutney.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-1203", name: "Fluffy Poori Saagu (3 pcs)", price: 75, isVeg: true, rating: 4.6, description: "Puffed wheat pooris served with coconut vegetable saagu and spicy onion chutney.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80", category: "South Indian" }
    ]
  },
  {
    id: "rest-24",
    name: "Vidyarthi Bhavan Gandhi Bazaar",
    description: "Over 80 years of culinary glory in Basavanagudi, known for iconic thick butter dosas, filter coffee, and rava vada.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "18.5k+",
    cuisines: ["South Indian", "Fast Food", "Pure Veg"],
    deliveryTime: 20,
    priceForTwo: 180,
    distance: "3.4 km",
    pureVeg: true,
    hasOffer: false,
    offerText: "",
    deliveryFee: 15,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Nostalgic pre-independence Karnataka eatery adorned with sketches of Kannada literary legends",
      alcohol: false
    },
    address: { street: "Gandhi Bazaar, Basavanagudi", city: "Bengaluru", area: "Basavanagudi" },
    menu: [
      { id: "m-2401", name: "Vidyarthi Bhavan Special Masale Dose", price: 85, isVeg: true, rating: 5.0, description: "The legendary deep-golden thick crunchy dosa soaked in fresh churned butter.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2402", name: "Golden Crispy Rava Vada", price: 55, isVeg: true, rating: 4.8, description: "Semolina and peppercorn vada fried crisp with fresh ginger and coriander.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2403", name: "Saffron Kesari Bath with Cashews", price: 50, isVeg: true, rating: 4.7, description: "Sweet semolina roasted in ghee with dry fruits and fragrant cardamom.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-25",
    name: "Taaza Thindi Traditional Tiffins",
    description: "Affordable, hygienic, and consistently delicious Bangalore tiffins with piping hot idlis and crunchy vadas.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "11.2k+",
    cuisines: ["South Indian", "Fast Food", "Pure Veg"],
    deliveryTime: 14,
    priceForTwo: 120,
    distance: "1.0 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "Quick 15 Min Delivery",
    deliveryFee: 10,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Ultra-clean self-service standing tiffin corner with open live kitchen",
      alcohol: false
    },
    address: { street: "100ft Ring Road, Jayanagar 4th T Block", city: "Bengaluru", area: "Jayanagar" },
    menu: [
      { id: "m-2501", name: "Steam Idli with Coconut Chutney", price: 30, isVeg: true, rating: 4.9, description: "Super soft, light-as-air idli served with fresh mint-coconut chutney and hot sambar.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2502", name: "Crispy Uddina Vada", price: 35, isVeg: true, rating: 4.9, description: "Crunchy lentil donut vada made fresh continuously every 5 minutes.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2503", name: "Chow Chow Bath (Khara & Kesari)", price: 55, isVeg: true, rating: 4.8, description: "Combination of spicy vegetable khara upma alongside sweet golden pineapple kesari.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80", category: "South Indian" }
    ]
  },
  {
    id: "rest-26",
    name: "MTR - Mavalli Tiffin Room",
    description: "The birthplace of Rava Idli and century-old recipes. Heritage Karnataka silver-service breakfast and lunch.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "21k+",
    cuisines: ["South Indian", "Karnataka", "Pure Veg"],
    deliveryTime: 24,
    priceForTwo: 300,
    distance: "3.1 km",
    pureVeg: true,
    hasOffer: false,
    offerText: "",
    deliveryFee: 15,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Century-old heritage institution with brass utensils and white-linen service",
      alcohol: false
    },
    address: { street: "Lalbagh Fort Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-2601", name: "Original Heritage Rava Idli with Ghee", price: 80, isVeg: true, rating: 5.0, description: "Invented here during WWII: semolina steamed with cashews, mustard seeds, and melted ghee pot.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2602", name: "MTR Royal Bisi Bele Bath", price: 110, isVeg: true, rating: 4.9, description: "Fragrant rice and lentils simmered with nutmeg, mace, cinnamon, vegetables, topped with boondi.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80", category: "South Indian" },
      { id: "m-2603", name: "Chandrahara Signature Sweet", price: 90, isVeg: true, rating: 4.8, description: "MTR's exclusive layered sweet pastry steeped in thick condensed milk and silver leaf.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },

  // =========================================================================
  // 5. CHINESE, PAN-ASIAN & DIMSUM
  // =========================================================================
  {
    id: "rest-5",
    name: "Wok Express & Dimsum House",
    description: "Sizzling Hakka wok bowls, steamed crystal dimsums, spicy Schezwan noodles and golden fried spring rolls.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
    rating: 4.3,
    ratingCount: "940+",
    cuisines: ["Chinese", "Asian", "Momos"],
    deliveryTime: 22,
    priceForTwo: 280,
    distance: "2.0 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹50 OFF on Noodle Bowls",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Quick pan-Asian live wok kitchen",
      alcohol: false
    },
    address: { street: "ITPL Main Road, Whitefield", city: "Bengaluru", area: "Whitefield" },
    menu: [
      { id: "m-501", name: "Pan-Fried Chicken Gyoza (6 Pcs)", price: 199, isVeg: false, rating: 4.7, description: "Japanese style crispy-bottom dumplings stuffed with minced scallion chicken and sesame soy.", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80", category: "Momos" },
      { id: "m-502", name: "Street Style Hakka Chili Noodles", price: 179, isVeg: true, rating: 4.5, description: "Wok-tossed noodles with shredded bell peppers, cabbage and mild dark soy sauce.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", category: "Chinese" },
      { id: "m-503", name: "Chili Garlic Crispy Tofu & Peppers", price: 189, isVeg: true, rating: 4.4, description: "Tossed in spicy bird's eye chili, sweet basil and garlic soy reduction.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80", category: "Asian" },
      { id: "m-504", name: "Classic Schezwan Chicken Gravy", price: 230, isVeg: false, rating: 4.6, description: "Fiery Schezwan chili paste gravy with tender chicken chunks and spring onions.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", category: "Chinese" }
    ]
  },
  {
    id: "rest-13",
    name: "Mainland China Gourmet & Noodle Bar",
    description: "Award-winning fine dining Chinese with hand-folded dim sums, jasmine tea, peking duck and claypot noodles.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "4.9k+",
    cuisines: ["Chinese", "Asian", "Dimsum"],
    deliveryTime: 28,
    priceForTwo: 650,
    distance: "2.6 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "15% OFF on Dinner Dining",
    deliveryFee: 20,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Luxurious oriental Chinese decor with ornate carved wood and ambient lanterns",
      alcohol: true
    },
    address: { street: "Church Street, Off MG Road", city: "Bengaluru", area: "Church Street" },
    menu: [
      { id: "m-1301", name: "Crispy Lotus Stem in Honey Chili", price: 260, isVeg: true, rating: 4.9, description: "Crisp sliced lotus roots wok-glazed with wild honey, toasted sesame and cracked chili.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1302", name: "Steamed Prawn & Chive Siu Mai", price: 340, isVeg: false, rating: 4.8, description: "Open-topped delicate wonton parcels filled with fresh chopped coastal prawns.", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80", category: "Dimsum" },
      { id: "m-1303", name: "General Tso's Sweet & Tangy Chicken", price: 320, isVeg: false, rating: 4.7, description: "Golden fried chicken cubes tossed in ginger, garlic, chili, and sweet rice wine vinegar.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80", category: "Chinese" },
      { id: "m-1304", name: "Sizzling Chocolate Brownie Sundae", price: 220, isVeg: true, rating: 4.9, description: "Served sizzling on a hot iron skillet with warm chocolate fudge and rich vanilla bean ice cream.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-27",
    name: "Chung Wah Chinatown Heritage",
    description: "Bangalore's oldest Chinese institution since 1970, famed for fiery dragon chicken, Manchurian and fried rice.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: "6.8k+",
    cuisines: ["Chinese", "Asian", "Fast Food"],
    deliveryTime: 20,
    priceForTwo: 320,
    distance: "2.1 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat 20% OFF on Fried Rice Combos",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Nostalgic Indo-Chinese restaurant with red tablecloths and family booths",
      alcohol: true
    },
    address: { street: "Residency Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-2701", name: "Signature Spicy Dragon Chicken", price: 260, isVeg: false, rating: 4.9, description: "Thin chicken strips wok-fried with cashews, red chili paste and tangy Chinese plum sauce.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", category: "Chinese" },
      { id: "m-2702", name: "Yangzhou Cantonese Fried Rice", price: 210, isVeg: true, rating: 4.6, description: "Light and fluffy jasmine rice stir-fried with scallions, green peas and cracked white pepper.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80", category: "Chinese" },
      { id: "m-2703", name: "Crispy Vegetable Spring Rolls", price: 160, isVeg: true, rating: 4.5, description: "Crisp golden wraps filled with cabbage, carrots, bean sprouts, with sweet chili sauce.", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-28",
    name: "Mamagoto Asian Street Kitchen",
    description: "Fun, vibrant Asian street eats, spicy Bangkok Pad Thai, steamed fluffy bao buns, and artisanal dimsums.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "3.4k+",
    cuisines: ["Asian", "Thai", "Japanese"],
    deliveryTime: 25,
    priceForTwo: 580,
    distance: "1.7 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Free Dimsum Basket on ₹599+",
    deliveryFee: 15,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Manga-inspired pop art walls with colorful cocktails and indie playlists",
      alcohol: true
    },
    address: { street: "12th Main Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-2801", name: "Bangkok Street Pad Thai Noodles", price: 340, isVeg: false, rating: 4.8, description: "Flat rice noodles stir-fried in tamarind sauce with prawns, crushed peanuts, and lime.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", category: "Asian" },
      { id: "m-2802", name: "Crispy Teriyaki Chicken Bao (2 pcs)", price: 280, isVeg: false, rating: 4.7, description: "Warm fluffy lotus bao buns stuffed with glazed teriyaki chicken and pickled cucumber.", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80", category: "Asian" },
      { id: "m-2803", name: "Crunchy Prawn Tempura Rolls", price: 360, isVeg: false, rating: 4.8, description: "Crispy battered prawn sushi rolled with spicy mayo and toasted black sesame.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80", category: "Asian" }
    ]
  },

  // =========================================================================
  // 6. SPECIALTY CAFES, ROASTERS & ARTISAN BAKERIES
  // =========================================================================
  {
    id: "rest-6",
    name: "Cafe Roastery & Artisan Bakery",
    description: "Single-origin Arabica pour-overs, flaky French croissants, artisan sourdough toasts and decadent cheesecakes.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "2.8k+",
    cuisines: ["Cafes", "Coffee", "Bakery"],
    deliveryTime: 18,
    priceForTwo: 400,
    distance: "1.3 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Complimentary Cookie with Large Brew",
    deliveryFee: 0,
    category: ["Cafes", "Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Lush botanical garden patio with slow-jazz and workstation plug points",
      alcohol: false
    },
    address: { street: "4th Block, Koramangala", city: "Bengaluru", area: "Koramangala" },
    menu: [
      { id: "m-601", name: "Avocado & Feta Sourdough Toast", price: 249, isVeg: true, rating: 4.7, description: "Smashed Hass avocado, crumbled Greek feta on artisan toasted sourdough.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-602", name: "Caramel Iced Latte", price: 180, isVeg: true, rating: 4.8, description: "Double shot espresso over chilled milk and artisanal salted caramel drizzle.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-603", name: "Butter Croissant", price: 130, isVeg: true, rating: 4.6, description: "Flaky, buttery French laminated pastry baked fresh every morning.", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80", category: "Bakery" },
      { id: "m-604", name: "Belgian Dark Chocolate Waffle", price: 210, isVeg: true, rating: 4.9, description: "Warm waffle topped with pure Belgian Callebaut chocolate and fresh sliced strawberries.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-14",
    name: "Third Wave Coffee Roasters",
    description: "Pioneers of Indian specialty third wave coffee, pour-overs, cold brews, and artisan bagels.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "4.1k+",
    cuisines: ["Cafes", "Coffee", "Bakery"],
    deliveryTime: 22,
    priceForTwo: 450,
    distance: "1.2 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Free Cookie on Coffee Combos",
    deliveryFee: 15,
    category: ["Cafes", "Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Modern minimalist workspace with power sockets at every table",
      alcohol: false
    },
    address: { street: "100 Feet Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-1401", name: "Sea Salt Mocha Cold Brew", price: 210, isVeg: true, rating: 4.9, description: "16-hour slow steep cold brew with decadent mocha ganache and flaky sea salt.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-1402", name: "Smoked Chicken Jalapeño Bagel", price: 240, isVeg: false, rating: 4.7, description: "Toasted multigrain bagel loaded with smoked chicken and herbed cream cheese.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-1403", name: "Classic Cappuccino with Oat Milk", price: 175, isVeg: true, rating: 4.8, description: "Rich double espresso with silky textured micro-foam oat milk.", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-1404", name: "Gooey Cinnamon Roll with Frosting", price: 140, isVeg: true, rating: 4.8, description: "Freshly baked brioche swirl rolled with Korintje cinnamon and cream cheese glaze.", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80", category: "Bakery" }
    ]
  },
  {
    id: "rest-15",
    name: "DYU Art Cafe & Studio",
    description: "Kerala-style heritage villa cafe with courtyard open seating, hot chocolate, banoffee pie and fresh juices.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "7.1k+",
    cuisines: ["Cafes", "Continental", "Desserts"],
    deliveryTime: 25,
    priceForTwo: 400,
    distance: "2.7 km",
    pureVeg: false,
    hasOffer: false,
    offerText: "",
    deliveryFee: 20,
    category: ["Cafes", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Breathtaking courtyard greenery, art gallery and vintage tiled roofs",
      alcohol: false
    },
    address: { street: "5th Block, Koramangala", city: "Bengaluru", area: "Koramangala" },
    menu: [
      { id: "m-1501", name: "Signature Banoffee Pie", price: 180, isVeg: true, rating: 4.9, description: "Layers of biscuit crumb base, thick dulce de leche, sliced bananas and whipped cream.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-1502", name: "Classic French Toast with Maple", price: 195, isVeg: true, rating: 4.8, description: "Golden pan-toasted brioche soaked in vanilla custard and real maple syrup.", image: "https://images.unsplash.com/photo-1528198691055-689bf43799c4?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-1503", name: "Thick Belgian Hot Chocolate", price: 170, isVeg: true, rating: 4.9, description: "Pure melted chocolate whisked with warm creamy milk and pillowy marshmallows.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Beverages" }
    ]
  },
  {
    id: "rest-29",
    name: "Blue Tokai Coffee Roasters",
    description: "Direct farm-sourced specialty beans roasted in micro-batches, sourdough tartines and cold brew tonics.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "3.9k+",
    cuisines: ["Cafes", "Coffee", "Healthy"],
    deliveryTime: 20,
    priceForTwo: 420,
    distance: "1.5 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "10% OFF on Whole Bean Bags",
    deliveryFee: 15,
    category: ["Cafes", "Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Sunlit Scandinavian interior with custom roasting stations and quiet work tables",
      alcohol: false
    },
    address: { street: "1st Block, Koramangala", city: "Bengaluru", area: "Koramangala" },
    menu: [
      { id: "m-2901", name: "Attikan Estate Manual Pour-Over", price: 190, isVeg: true, rating: 5.0, description: "Single estate Biligirirangana hills beans with notes of dark chocolate and candied fig.", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-2902", name: "Fluffy Scrambled Eggs on Sourdough", price: 230, isVeg: false, rating: 4.8, description: "Creamy slow-cooked eggs with chives on toasted sourdough with micro-greens.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-2903", name: "Pain Au Chocolat French Pastry", price: 140, isVeg: true, rating: 4.7, description: "Multilayered flaky butter pastry rolled around double sticks of dark chocolate.", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80", category: "Bakery" }
    ]
  },
  {
    id: "rest-30",
    name: "Glen's Bakehouse & Tearoom",
    description: "Famous for legendary bite-sized Red Velvet Cupcakes, piping hot chicken pot pies, and apple tarts.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "8.6k+",
    cuisines: ["Bakery", "Cafes", "Desserts"],
    deliveryTime: 22,
    priceForTwo: 350,
    distance: "1.9 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Box of 6 Cupcakes at ₹199",
    deliveryFee: 15,
    category: ["Cafes", "Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Cozy English cottage garden with wrought iron tables and aroma of freshly baked pies",
      alcohol: false
    },
    address: { street: "Lavelle Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-3001", name: "Glen's Signature Red Velvet Cupcakes (4 pcs)", price: 150, isVeg: true, rating: 4.9, description: "Infamous melt-in-mouth cocoa sponge topped with silky cream cheese frosting.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3002", name: "English Chicken & Mushroom Pot Pie", price: 220, isVeg: false, rating: 4.8, description: "Rich chicken and button mushrooms in white herb sauce sealed under golden puff pastry.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-3003", name: "Warm Spiced Cinnamon Apple Tart", price: 160, isVeg: true, rating: 4.7, description: "Caramelized Granny Smith apples baked in sweet shortcrust pastry with cinnamon.", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80", category: "Bakery" }
    ]
  },
  {
    id: "rest-31",
    name: "Matteo Coffea & Espresso Lounge",
    description: "Bangalore's iconic Church Street coffee landmark for rich espresso shakes, iced mochas, and blueberry cheesecake.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: "6.2k+",
    cuisines: ["Cafes", "Coffee", "Desserts"],
    deliveryTime: 25,
    priceForTwo: 380,
    distance: "2.4 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat ₹50 OFF on Shakes",
    deliveryFee: 15,
    category: ["Cafes", "Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Prime Church Street corner buzzing with students, writers, and open-air seating",
      alcohol: false
    },
    address: { street: "Church Street, Off Brigade Road", city: "Bengaluru", area: "Church Street" },
    menu: [
      { id: "m-3101", name: "Double Shot Matteo Shake Frost", price: 190, isVeg: true, rating: 4.9, description: "Espresso blended with premium dark chocolate gelato and thick milk.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80", category: "Cafes" },
      { id: "m-3102", name: "Classic Blueberry Baked Cheesecake", price: 230, isVeg: true, rating: 4.8, description: "Rich Philadelphia cream cheese on graham crust topped with wild blueberry compote.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3103", name: "Grilled Herb Chicken Club Sandwich", price: 210, isVeg: false, rating: 4.6, description: "Layered sourdough sandwich with rosemary chicken, tomatoes, lettuce and cheddar.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Cafes" }
    ]
  },

  // =========================================================================
  // 7. DESSERTS, ICE CREAM & ROYAL SWEETS
  // =========================================================================
  {
    id: "rest-7",
    name: "The Belgian Waffle & Dessert Co.",
    description: "Warm golden crispy waffles, dutch mini pancakes, churros and loaded sundaes with melted nutella.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "4.8k+",
    cuisines: ["Desserts", "Bakery", "Ice Cream"],
    deliveryTime: 20,
    priceForTwo: 250,
    distance: "2.1 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "Buy 1 Get 1 Mini Pancake",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Quick dessert counter with sweet aromas",
      alcohol: false
    },
    address: { street: "Church Street", city: "Bengaluru", area: "Church Street" },
    menu: [
      { id: "m-701", name: "Triple Chocolate Waffle", price: 170, isVeg: true, rating: 4.9, description: "Crispy dark chocolate waffle smothered in white, milk, and dark melted Belgian chocolate.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-702", name: "Nutella & Banana Dutch Pancakes", price: 150, isVeg: true, rating: 4.7, description: "10 bite-sized warm fluffy pancakes topped with pure Nutella spread and banana slices.", image: "https://images.unsplash.com/photo-1528198691055-689bf43799c4?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-703", name: "Warm Spanish Churros with Chocolate", price: 160, isVeg: true, rating: 4.8, description: "Fried choux pastry dusted with cinnamon sugar, served with rich molten chocolate dip.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-32",
    name: "Corner House Ice Cream",
    description: "The crown jewel of Bangalore ice creams since 1982, home of the legendary Death By Chocolate (DBC).",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: "25k+",
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    deliveryTime: 18,
    priceForTwo: 280,
    distance: "1.4 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "Flat ₹50 OFF on Sundaes",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Nostalgic parlor buzzing with families and friends queueing for sundaes",
      alcohol: false
    },
    address: { street: "Residency Road", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-3201", name: "Legendary DBC (Death By Chocolate)", price: 240, isVeg: true, rating: 5.0, description: "Warm chocolate cake, vanilla ice cream, hot chocolate fudge, roasted peanuts, cherries.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3202", name: "Classic Cake Fudge with Peanuts", price: 180, isVeg: true, rating: 4.9, description: "Soft chocolate cake layers topped with vanilla ice cream and cascading hot fudge sauce.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3203", name: "Roasted Almond Crunch Fudge", price: 195, isVeg: true, rating: 4.8, description: "Toasted crunchy California almonds coated in thick dark fudge over cold vanilla cream.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-33",
    name: "Milano Ice Cream & Artisan Gelato",
    description: "Authentic Italian gelato handcrafted fresh daily using pure imported ingredients, natural fruits and rich milk.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "5.7k+",
    cuisines: ["Desserts", "Ice Cream", "Italian"],
    deliveryTime: 16,
    priceForTwo: 260,
    distance: "1.1 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "Buy 2 Scoops Get Waffle Cone Free",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: false,
      ambience: "Chic pastel Italian gelateria with sidewalk benches and fairy lights",
      alcohol: false
    },
    address: { street: "100 Feet Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-3301", name: "Sicilian Dark Chocolate Gelato", price: 160, isVeg: true, rating: 4.9, description: "Intense 70% dark cocoa churned with silky Italian milk for a velvety texture.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3302", name: "Roasted Pistachio Delicacy", price: 180, isVeg: true, rating: 4.9, description: "Pure Bronte roasted pistachio paste blended into luscious aromatic gelato.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3303", name: "Wild Raspberry Sorbet (Vegan)", price: 150, isVeg: true, rating: 4.7, description: "Dairy-free refreshing natural berry sorbet bursting with tart sweet notes.", image: "https://images.unsplash.com/photo-1528198691055-689bf43799c4?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-34",
    name: "Anand Sweets & Royal Mithai",
    description: "Royal Indian confections, silver-coated Kaju Katli, desi ghee Motichoor ladoos, and spicy street snacks.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "9.3k+",
    cuisines: ["Desserts", "North Indian", "Fast Food"],
    deliveryTime: 20,
    priceForTwo: 300,
    distance: "2.5 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "Flat ₹50 OFF on Mithai Boxes",
    deliveryFee: 15,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: false,
      ambience: "Grand royal sweet boutique with chaat counter and festive gift hampers",
      alcohol: false
    },
    address: { street: "Commercial Street", city: "Bengaluru", area: "Central BLR" },
    menu: [
      { id: "m-3401", name: "Royal Kaju Katli (250g Box)", price: 290, isVeg: true, rating: 4.9, description: "Diamond cut cashew nut fudge crafted with silver vark and premium cardamom.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3402", name: "Desi Ghee Motichoor Ladoo (4 pcs)", price: 140, isVeg: true, rating: 4.8, description: "Tiny gram flour pearls fried in pure cow ghee and bound with melon seeds.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80", category: "Desserts" },
      { id: "m-3403", name: "Delhi Special Shahi Raj Kachori", price: 130, isVeg: true, rating: 4.8, description: "Crisp puffed kachori stuffed with sprouts, boiled potatoes, dahi, and tamarind chutney.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },

  // =========================================================================
  // 8. NORTH INDIAN CURRIES, MUGHLAI & ROOFTOP DINING
  // =========================================================================
  {
    id: "rest-8",
    name: "Punjab Grill Express",
    description: "Creamy Dal Makhani, Paneer Butter Masala, aromatic saffron rice and succulent Amritsari kulchas.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: "2.1k+",
    cuisines: ["North Indian", "Mughlai", "Thali"],
    deliveryTime: 32,
    priceForTwo: 360,
    distance: "3.7 km",
    pureVeg: true,
    hasOffer: true,
    offerText: "30% OFF on North Indian Meals",
    deliveryFee: 25,
    category: ["Delivery", "Dining Out"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Warm Punjabi hospitality with brass thalis and soothing music",
      alcohol: false
    },
    address: { street: "Sarjapur Main Road", city: "Bengaluru", area: "Sarjapur" },
    menu: [
      { id: "m-801", name: "Dal Makhani (Slow-Cooked 24hrs)", price: 210, isVeg: true, rating: 4.8, description: "Black lentils simmered overnight with butter and fresh cream on gentle charcoal embers.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80", category: "North Indian" },
      { id: "m-802", name: "Paneer Tikka Lababdar", price: 260, isVeg: true, rating: 4.6, description: "Grilled malai paneer cooked in a rich onion-tomato gravy with chopped bell peppers.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80", category: "North Indian" },
      { id: "m-803", name: "Amritsari Stuffed Aloo Kulcha", price: 70, isVeg: true, rating: 4.7, description: "Flaky leavened bread filled with spiced potato mash, served with chole and butter.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80", category: "North Indian" },
      { id: "m-804", name: "Creamy Malai Kofta Curry", price: 250, isVeg: true, rating: 4.8, description: "Stuffed cottage cheese dumplings in a velvety cashew and saffron yellow gravy.", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80", category: "North Indian" }
    ]
  },
  {
    id: "rest-16",
    name: "The Sky Lounge & Terrace",
    description: "Panoramic rooftop views of Bengaluru skyline, wood-charcoal grills, artisan craft beers and live DJ.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: "5.4k+",
    cuisines: ["Continental", "Finger Food", "Bar & Grill"],
    deliveryTime: 35,
    priceForTwo: 950,
    distance: "3.9 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat 20% OFF on Table Reservation",
    deliveryFee: 0,
    category: ["Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Breathtaking 12th-floor open terrace with infinity view and ambient fire pits",
      alcohol: true
    },
    address: { street: "100 Feet Road, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-1601", name: "Smoky Lamb Kebabs with Mint Dip", price: 420, isVeg: false, rating: 4.9, description: "Minced lamb infused with aromatic spices seared over open coals.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1602", name: "Loaded Truffle Cheese Nachos", price: 340, isVeg: true, rating: 4.7, description: "Crispy corn tortillas topped with molten cheese sauce, salsa, and jalapenos.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-1603", name: "Charcoal Grilled Jumbo Tiger Prawns", price: 560, isVeg: false, rating: 4.9, description: "Marinated with lemon herb butter, roasted garlic, and crushed peppercorns.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  },
  {
    id: "rest-35",
    name: "Barbeque Nation Unlimited Grill",
    description: "The pioneer of live on-table grills, unlimited kebabs, cajun spiced potatoes, and massive gourmet buffet spread.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: "16.4k+",
    cuisines: ["North Indian", "Bar & Grill", "Mughlai"],
    deliveryTime: 30,
    priceForTwo: 850,
    distance: "2.2 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Unlimited Buffet Deals from ₹649",
    deliveryFee: 0,
    category: ["Dining Out", "Delivery"],
    diningDetails: {
      hasOutdoorSeating: false,
      hasTableBooking: true,
      ambience: "Celebratory dining atmosphere with live skewer grills embedded directly into tables",
      alcohol: true
    },
    address: { street: "100 Feet Road, HAL 2nd Stage, Indiranagar", city: "Bengaluru", area: "Indiranagar" },
    menu: [
      { id: "m-3501", name: "Famous Cajun Spiced Potatoes", price: 210, isVeg: true, rating: 4.9, description: "Crisp golden pressed baby potatoes slathered in creamy spiced Cajun mayonnaise.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-3502", name: "Charcoal Tandoori Chicken Skewers (6 pcs)", price: 320, isVeg: false, rating: 4.8, description: "Smoky boneless chicken thigh chunks basted in mustard oil and hung yogurt.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-3503", name: "Kesar Pista Kulfi on a Stick", price: 80, isVeg: true, rating: 4.9, description: "Authentic dense slow-churned Indian ice cream with saffron, pistachios and cardamom.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=80", category: "Desserts" }
    ]
  },
  {
    id: "rest-36",
    name: "Windmills Craftworks & Jazz Lounge",
    description: "World-class microbrewery, library jazz lounge, hand-crafted ales, stout, and gourmet global comfort food.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: "8.9k+",
    cuisines: ["Continental", "Bar & Grill", "Burgers"],
    deliveryTime: 35,
    priceForTwo: 1200,
    distance: "4.8 km",
    pureVeg: false,
    hasOffer: true,
    offerText: "Flat 15% OFF on Early Table Bookings",
    deliveryFee: 0,
    category: ["Dining Out"],
    diningDetails: {
      hasOutdoorSeating: true,
      hasTableBooking: true,
      ambience: "Exceptional acoustic jazz theater surrounded by wall-to-ceiling book library",
      alcohol: true
    },
    address: { street: "EPIP Zone, Whitefield", city: "Bengaluru", area: "Whitefield" },
    menu: [
      { id: "m-3601", name: "Golden Ale Beer Battered Fish & Chips", price: 460, isVeg: false, rating: 4.9, description: "Fresh river sole fillet in crisp house ale batter, served with mushy peas and tartare.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-3602", name: "Slow Smoked Pork Ribs with Bourbon Glaze", price: 580, isVeg: false, rating: 4.9, description: "Tender ribs braised for 8 hours in Kentucky bourbon and molasses barbecue reduction.", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80", category: "Starters" },
      { id: "m-3603", name: "Artisanal Wood Oven Baked Brie", price: 380, isVeg: true, rating: 4.8, description: "Whole wheel of French brie baked with rosemary honey and toasted walnut bread.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80", category: "Starters" }
    ]
  }
];

// Distinct Food Cuisines/Categories (Used for food filtering)
const foodCategoriesList = [
  { id: "all", name: "All Dishes", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop&q=80" },
  { id: "biryani", name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80" },
  { id: "pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&auto=format&fit=crop&q=80" },
  { id: "burgers", name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80" },
  { id: "south_indian", name: "South Indian", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&auto=format&fit=crop&q=80" },
  { id: "north_indian", name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&auto=format&fit=crop&q=80" },
  { id: "chinese", name: "Chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&auto=format&fit=crop&q=80" },
  { id: "cafes", name: "Cafes", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&auto=format&fit=crop&q=80" },
  { id: "desserts", name: "Desserts", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200&auto=format&fit=crop&q=80" },
  { id: "starters", name: "Starters & Kebabs", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=200&auto=format&fit=crop&q=80" }
];

// High-level Section Modes / Pages
const sectionTabs = [
  { id: "all", label: "All Spots", icon: "Compass", subtitle: "Explore everything nearby" },
  { id: "delivery", label: "Delivery", icon: "Bike", subtitle: "Doorstep delivery in 20-30 mins" },
  { id: "dining", label: "Dining Out", icon: "Utensils", subtitle: "Book tables & dine in top restaurants" },
  { id: "cafes", label: "Cafes", icon: "Coffee", subtitle: "Workspaces, coffee & bakeries" }
];

module.exports = { seedRestaurants, foodCategoriesList, sectionTabs };
