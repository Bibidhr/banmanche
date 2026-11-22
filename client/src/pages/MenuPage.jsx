import React from 'react';
import { motion } from 'framer-motion';

export default function MenuPage() {
  // Complete authentic menu from TripAdvisor & BanManche's kitchen
  const starters = [
    {
      id: "starters-1",
      name: "Pan-Fried Kothey Momos",
      nepaliName: "पान-फ्राइड कोठे मोमो",
      description: "Handcrafted dumplings with golden pan-crisped bottoms, served with fire-roasted tomato and wild timmur achar",
      price: 650,
      region: "Tibet & Nepal",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdhgoRwqEBzSkb7Hye6G6_SJ_XEzg_3m6pKiFJB2UtXkdGdA0RmKmfbZOmSk5a_4daY9Ey3iQkeJgIMwK2CZidKko5JXXIdxzDkn2yt1vZUuAZcLG5wR39Lu5IUi2drlWNkwUj-urLD3yU=s1600"
    },
    {
      id: "starters-2",
      name: "Tibetan Mokthuk Soup",
      nepaliName: "मोकथुक मोमो सुप",
      description: "Delicate handmade momo dumplings immersed in a nourishing bone marrow and mountain herbal broth with fresh baby bok choy",
      price: 700,
      region: "Tibet",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLctCctpCRI-uGoVepxgPJS6CwXA8UAkPJoRK__FOLu8Eym2yTBxoVCMysmWsen7AdlcX6_4Od_LG3B3sImSZa8oN5Sp6--Lyy_7WTAFYIrg0pU4lc1-jCq3IK9NZFiAJcQvgmipTcgZfIs=s1600"
    },
    {
      id: "starters-3",
      name: "Spinach & Mushroom Datshi Crostini",
      nepaliName: "च्याउ र पालुङ्गो दात्शी क्रोस्टिनी",
      description: "Toasted mountain sourdough topped with wild Himalayan forest mushrooms and spinach smothered in melted artisanal Bhutanese cow's milk cheese",
      price: 680,
      region: "Bhutan",
      dietary: "veg",
      spicyLevel: 1,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLfKg1ajhjBQyR0L9SdB3H2VtRK7ocIRA3BPfy111filN7BIekmYevTsLfvQM4cT5IQYIPDOvoDTiplHXkCE2On-X8j72KHFD0_IAs409HfG6IxjSpeTBNVZHkpluKW-kPitIih4WJsclAQ=s1600"
    },
    {
      id: "starters-4",
      name: "Crispy Shapalay with Fire Achar",
      nepaliName: "कुरकुरा शापाले",
      description: "Golden fried half-moon Tibetan meat pies filled with spiced minced meat, spring onions, and garlic, served with charred mountain timmur dip",
      price: 580,
      region: "Tibet & Nepal",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdhgoRwqEBzSkb7Hye6G6_SJ_XEzg_3m6pKiFJB2UtXkdGdA0RmKmfbZOmSk5a_4daY9Ey3iQkeJgIMwK2CZidKko5JXXIdxzDkn2yt1vZUuAZcLG5wR39Lu5IUi2drlWNkwUj-urLD3yU=s1600"
    },
    {
      id: "starters-5",
      name: "Dohkhleh Minced Herb Salad",
      nepaliName: "दोहखलेह सलाद",
      description: "Traditional Khasi warm minced meat salad tossed with fresh mountain ginger, sliced shallots, mustard oil, and mountain coriander",
      price: 620,
      region: "Meghalaya",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeTljpP-uXJwqRCcswLwd_yl6m6kFVqee-Iw3BEh4YCWwZ_lIuNYXlI9TjlefXxt462yfk_RN1ZM8yIyJNm3hfYAsD0Qw-xahKbgQZ3USq3iG2WZLEmj8yixeLEkwYY0cEqappdFiQ7IzVa=s1600"
    },
    {
      id: "starters-6",
      name: "Alu Dum & Wai Wai Sadeko",
      nepaliName: "आलु दम र चाउचाउ साधेको",
      description: "Spiced Kathmandu street-style tempered baby potatoes and crunchy noodles tossed in raw mustard oil, fresh green chili, and lemon juice",
      price: 450,
      region: "Kathmandu Valley",
      dietary: "veg",
      spicyLevel: 2,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdhgoRwqEBzSkb7Hye6G6_SJ_XEzg_3m6pKiFJB2UtXkdGdA0RmKmfbZOmSk5a_4daY9Ey3iQkeJgIMwK2CZidKko5JXXIdxzDkn2yt1vZUuAZcLG5wR39Lu5IUi2drlWNkwUj-urLD3yU=s1600"
    }
  ];

  const mainCourses = [
    {
      id: "mains-1",
      name: "Naga Smoked Pork / Mountain Curry",
      nepaliName: "नागा स्मोक्ड पोर्क करी",
      description: "Tender, slow-braised mountain pork chunks with whole stewed chilies and fermented bamboo shoots in an aromatic rich gravy, served in a sizzling cast iron pan",
      price: 1850,
      region: "Nagaland",
      dietary: "non-veg",
      spicyLevel: 3,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeTljpP-uXJwqRCcswLwd_yl6m6kFVqee-Iw3BEh4YCWwZ_lIuNYXlI9TjlefXxt462yfk_RN1ZM8yIyJNm3hfYAsD0Qw-xahKbgQZ3USq3iG2WZLEmj8yixeLEkwYY0cEqappdFiQ7IzVa=s1600"
    },
    {
      id: "mains-2",
      name: "Freshly Steamed Tingmo & Ema Datshi",
      nepaliName: "ताजा तिङमो र एमा दात्शी",
      description: "Fluffy handmade spiral Tibetan Tingmo bread buns served piping hot alongside Bhutan's fiery green mountain chilies simmered in melted Himalayan cheese gravy",
      price: 1000,
      region: "Bhutan & Tibet",
      dietary: "veg",
      spicyLevel: 3,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLfKg1ajhjBQyR0L9SdB3H2VtRK7ocIRA3BPfy111filN7BIekmYevTsLfvQM4cT5IQYIPDOvoDTiplHXkCE2On-X8j72KHFD0_IAs409HfG6IxjSpeTBNVZHkpluKW-kPitIih4WJsclAQ=s1600"
    },
    {
      id: "mains-3",
      name: "Authentic Nepali Courtyard Thali",
      nepaliName: "विशेष नेपाली आँगन थाली",
      description: "Complete feast with slow-cooked black daal finished with local mountain ghee, tender goat mutton curry, seasonal wild greens (saag), spiced cucumber achar, and dalle pickle",
      price: 1450,
      region: "Kathmandu Valley",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeTljpP-uXJwqRCcswLwd_yl6m6kFVqee-Iw3BEh4YCWwZ_lIuNYXlI9TjlefXxt462yfk_RN1ZM8yIyJNm3hfYAsD0Qw-xahKbgQZ3USq3iG2WZLEmj8yixeLEkwYY0cEqappdFiQ7IzVa=s1600"
    },
    {
      id: "mains-4",
      name: "Jadoh & Dohkhleh Platter",
      nepaliName: "जाडोह र दोहखलेह",
      description: "Traditional Khasi Meghalayan aromatic short-grain rice cooked with mountain spices, served with fresh Dohkhleh salad with ginger, fresh mountain herbs, and shallots",
      price: 850,
      region: "Meghalaya",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeTljpP-uXJwqRCcswLwd_yl6m6kFVqee-Iw3BEh4YCWwZ_lIuNYXlI9TjlefXxt462yfk_RN1ZM8yIyJNm3hfYAsD0Qw-xahKbgQZ3USq3iG2WZLEmj8yixeLEkwYY0cEqappdFiQ7IzVa=s1600"
    },
    {
      id: "mains-5",
      name: "Slow-Simmered Himalayan Mutton",
      nepaliName: "हिलालयन खसीको मासु",
      description: "Free-range mountain mutton slow-simmered for 5 hours over sal wood coals with whole shallots, ginger, garlic, and wild Dolpa timmur peppercorns",
      price: 1650,
      region: "Dolpa & Mustang",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeTljpP-uXJwqRCcswLwd_yl6m6kFVqee-Iw3BEh4YCWwZ_lIuNYXlI9TjlefXxt462yfk_RN1ZM8yIyJNm3hfYAsD0Qw-xahKbgQZ3USq3iG2WZLEmj8yixeLEkwYY0cEqappdFiQ7IzVa=s1600"
    },
    {
      id: "mains-6",
      name: "Fire-Roasted Mountain Trout",
      nepaliName: "आगोमा पोलेको ट्राउट माछा",
      description: "Whole fresh Himalayan river trout grilled over open wood coals, basted with mustard oil, fresh lemon, crushed wild coriander, and smoked rock salt",
      price: 1750,
      region: "Langtang & Rasuwa",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLctCctpCRI-uGoVepxgPJS6CwXA8UAkPJoRK__FOLu8Eym2yTBxoVCMysmWsen7AdlcX6_4Od_LG3B3sImSZa8oN5Sp6--Lyy_7WTAFYIrg0pU4lc1-jCq3IK9NZFiAJcQvgmipTcgZfIs=s1600"
    },
    {
      id: "mains-7",
      name: "Vegetarian Datshi & Red Rice Feast",
      nepaliName: "शाकाहारी दात्शी र रातो चामल",
      description: "Bhutanese roasted chili cheese and potato cheese curry served with steamed red rice, buttered seasonal mountain greens, and house radish pickle",
      price: 1150,
      region: "Bhutan",
      dietary: "veg",
      spicyLevel: 2,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLfKg1ajhjBQyR0L9SdB3H2VtRK7ocIRA3BPfy111filN7BIekmYevTsLfvQM4cT5IQYIPDOvoDTiplHXkCE2On-X8j72KHFD0_IAs409HfG6IxjSpeTBNVZHkpluKW-kPitIih4WJsclAQ=s1600"
    }
  ];

  const desserts = [
    {
      id: "dessert-1",
      name: "Himalayan Chhurpi & Saffron Cheesecake",
      nepaliName: "छुर्पी र केसर चीजकेक",
      description: "Velvety baked cheesecake balanced with artisanal soft chhurpi curd, Kashmiri saffron swirl, and buckwheat biscuit crust",
      price: 600,
      region: "Nepal & Tibet",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdEWpt5YuYtIByQ3WWZOXkrJnaywVeJnlOc-OJzY9m6MQdd_utopdOycgW9CYtKk7JYOFJWFtc23kI7bv9okpvP7Q4OVcGqlTRhZiFHcbSJBT2kRXle9KIxrmys-rhT8zHpPvJLTwIfGj7O=s1600"
    },
    {
      id: "dessert-2",
      name: "Wild Honey & Buckwheat Tartlet",
      nepaliName: "जङ्गली मह र फापरको टार्ट",
      description: "Mustang Tartary buckwheat crisp crust filled with caramelized mountain honey cream and toasted pine nuts",
      price: 550,
      region: "Mustang",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdEWpt5YuYtIByQ3WWZOXkrJnaywVeJnlOc-OJzY9m6MQdd_utopdOycgW9CYtKk7JYOFJWFtc23kI7bv9okpvP7Q4OVcGqlTRhZiFHcbSJBT2kRXle9KIxrmys-rhT8zHpPvJLTwIfGj7O=s1600"
    },
    {
      id: "dessert-3",
      name: "Warm Cardamom Kheer",
      nepaliName: "तातो सुकुमेल खीर",
      description: "Slow-cooked Himalayan aromatic rice pudding with full-cream milk, crushed green cardamom, golden raisins, and slivered pistachios",
      price: 450,
      region: "Kathmandu Valley",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdEWpt5YuYtIByQ3WWZOXkrJnaywVeJnlOc-OJzY9m6MQdd_utopdOycgW9CYtKk7JYOFJWFtc23kI7bv9okpvP7Q4OVcGqlTRhZiFHcbSJBT2kRXle9KIxrmys-rhT8zHpPvJLTwIfGj7O=s1600"
    }
  ];

  const cocktails = [
    {
      id: "drink-1",
      name: "Timur Smoked Old Fashioned",
      nepaliName: "टिमुर स्मोक्ड ओल्ड फ्यासन",
      description: "Oak-aged bourbon infused with foraged Himalayan Timur pepper, raw wildflower honey, Angostura bitters, and pine smoke crafted at the ARAK bar counter",
      price: 850,
      region: "Arak Bar Kathmandu",
      dietary: "veg",
      spicyLevel: 1,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "drink-2",
      name: "Kathmandu Lapsi Titaura Sour",
      nepaliName: "तीतो तितौरा सावर",
      description: "Artisanal dry gin shaken with spiced lapsi (hog plum) titaura syrup, fresh lime juice, silky egg white foam, and a dehydrated citrus wheel",
      price: 800,
      region: "Arak Bar Kathmandu",
      dietary: "non-veg",
      spicyLevel: 0,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "drink-3",
      name: "Dolpa Juniper & Wild Pine Fizz",
      nepaliName: "डोल्पा जुनिपर र पाइन फिज",
      description: "Craft Himalayan gin distilled with Dolpa juniper berries, muddled cucumber, wild pine needle cordial, and crisp sparkling mountain soda",
      price: 820,
      region: "Dolpa & Kathmandu",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "drink-4",
      name: "Warm Spiced Himalayan Arak Toddy",
      nepaliName: "तातो मसलेदार अराक टडी",
      description: "Double-distilled mountain millet arak gently warmed with wild clover honey, cinnamon bark, cloves, and a charred orange wheel. Perfect by the courtyard fire pits",
      price: 750,
      region: "Himalayan Foothills",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "drink-5",
      name: "Himalayan Rhododendron Spritz",
      nepaliName: "लालीगुराँस स्प्रिट्ज",
      description: "Wild laligurans flower liqueur, prosecco, crisp sparkling soda, and a dash of mountain bitters garnished with edible botanicals",
      price: 800,
      region: "Eastern Nepal",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    }
  ];

  const hotDrinks = [
    {
      id: "hot-1",
      name: "Traditional Tibetan Butter Tea (Po Cha)",
      nepaliName: "परम्परागत तिब्बती बटर चिया (पो छा)",
      description: "Aged brick tea churned with fresh yak butter and Himalayan rock salt in a traditional wooden dongmo cylinder",
      price: 350,
      region: "Tibet & Upper Himalayas",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "hot-2",
      name: "Ilam First-Flush Orthodox Black Tea",
      nepaliName: "इलाम पहिलो टिपाइ अर्थोडक्स चिया",
      description: "Hand-picked high-elevation whole leaf black tea from the mist-covered hills of Ilam, featuring floral muscatel notes",
      price: 320,
      region: "Ilam, Eastern Nepal",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "hot-3",
      name: "Wild Mint & Lemongrass Mountain Infusion",
      nepaliName: "जङ्गली पुदिना र लेमनग्रास इन्फ्युजन",
      description: "Naturally caffeine-free herbal brew of foraged wild mountain mint, crushed dried lemongrass, and fresh ginger root",
      price: 280,
      region: "Kathmandu Valley Hills",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "hot-4",
      name: "Himalayan Masala Milk Tea",
      nepaliName: "मसालेदार दुध चिया",
      description: "Rich whole milk simmered with organic ginger, crushed green cardamom, black pepper, and premium CTC tea leaves",
      price: 300,
      region: "Nepal",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    }
  ];

  const wines = [
    {
      id: "wine-1",
      name: "Reserve Mountain Pinot Noir",
      nepaliName: "रिजर्भ पिनो नुवार",
      description: "Elegant medium-bodied red with notes of dark mountain cherries, forest floor, and delicate French oak. Glass — Rs.950",
      price: 4500,
      region: "Estate Selection",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "wine-2",
      name: "Crisp High-Altitude Sauvignon Blanc",
      nepaliName: "सोभिग्नन ब्लाङ्क",
      description: "Vibrant dry white with citrus zest, gooseberry, and flinty mineral backbone. Glass — Rs.900",
      price: 4200,
      region: "Estate Selection",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    },
    {
      id: "wine-3",
      name: "Prosecco Extra Dry Spumante",
      nepaliName: "प्रोसेको अतिरिक्त सुख्खा",
      description: "Fine perlage with green apple bouquet and white peach aromas. Celebratory bottle for courtyard evenings",
      price: 5800,
      region: "Veneto, Italy",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLc97hv4vF-cvLVr4WNJRnMuAxfHQEgE9f-BsjrknimH0aPOsLO1qdv8OYfpNUWLlm17pHrTHaqlqtU2BZ9de-uEdvpVfiXLBJntVNBX5ZBa3iFvCIsv5v5ZTS1Psd3lkVDskJQEe81NXsvL=s1600"
    }
  ];

  // Minimalist Chéz Caroline menu item: Name + Price with full left-to-right alignment and elegant subtle border
  const renderItem = (dish) => (
    <motion.div 
      key={dish.id} 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="py-2.5 px-3 rounded-lg hover:bg-black/[0.02] transition-colors select-none flex items-baseline justify-between gap-4 border-b border-obsidian-200/50"
    >
      <span className="font-menu text-xl sm:text-2xl text-obsidian-950 font-normal tracking-tight">
        {dish.name}
      </span>
      <span className="font-sans text-base sm:text-lg font-light text-obsidian-600 tracking-wide shrink-0">
        — Rs.{dish.price.toLocaleString()}
      </span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32 pb-32 px-6 sm:px-10 lg:px-14 text-obsidian-950">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* ========================================================================= */}
        {/* EXACT CHÉZ CAROLINE HEADER: JUST 'MENU' & 'ALL RATES ARE TAX INCLUDED'    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-1.5 pb-6 border-b border-obsidian-200/60"
        >
          <h1 className="font-menu text-4xl sm:text-6xl font-normal text-obsidian-950 tracking-tight">
            Menu
          </h1>
          <p className="text-xs sm:text-sm font-sans text-obsidian-500 font-normal tracking-wide">
            All rates are Tax included
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* ONE-SCROLL CONTINUOUS SECTIONS (STARTERS -> MAINS -> DESSERTS -> DRINKS)   */}
        {/* ========================================================================= */}

        {/* 1. STARTERS */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Starters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {starters.map(renderItem)}
          </div>
        </motion.section>

        {/* 2. MAIN COURSES */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Main Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {mainCourses.map(renderItem)}
          </div>
        </motion.section>

        {/* 3. DESSERTS */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Desserts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {desserts.map(renderItem)}
          </div>
        </motion.section>

        {/* 4. DRINKS & COCKTAILS */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <div className="flex items-center justify-center gap-2.5">
            <img
              src="/arak-logo.png"
              alt="ARAK"
              className="h-6 sm:h-7 w-auto object-contain"
            />
            <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 tracking-wide">
              Bar Cocktails & Spirits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {cocktails.map(renderItem)}
          </div>
        </motion.section>

        {/* 5. HOT DRINKS & TEAS */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Hot drinks & Teas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {hotDrinks.map(renderItem)}
          </div>
        </motion.section>

        {/* 6. WINE & CELLAR */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Wine & Cellar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {wines.map(renderItem)}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
