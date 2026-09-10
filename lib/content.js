// ─────────────────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE.
// Edit this file to add, remove, or change anything on the site - no other
// file needs to change. Each category becomes its own page automatically at
// /guide/[slug].
//
// Fields marked "// UPDATE:" contain placeholder info you should verify and
// replace with current details before publishing.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Kompassi",
  tagline: "Jyväskylä, decoded for the people just landing here.",
  author: "Dhrubajotee Howlader",
};

// Average daylight hours per month in Jyväskylä - the site's signature motif.
// Source: rough solar averages for 62°N. UPDATE with precise data if you want.
export const daylight = [
  { m: "Jan", hrs: 6.5 },
  { m: "Feb", hrs: 9 },
  { m: "Mar", hrs: 11.5 },
  { m: "Apr", hrs: 14.5 },
  { m: "May", hrs: 17.5 },
  { m: "Jun", hrs: 19.5 },
  { m: "Jul", hrs: 19 },
  { m: "Aug", hrs: 16 },
  { m: "Sep", hrs: 13 },
  { m: "Oct", hrs: 10 },
  { m: "Nov", hrs: 7 },
  { m: "Dec", hrs: 5.5 },
];

export const categories = [
  {
    slug: "groceries",
    title: "Groceries & everyday shopping",
    eyebrow: "Eating",
    blurb:
      "Where to buy food, what the chains mean, and how to shop like a local from week one.",
    accent: "amber",
    sections: [
      {
        heading: "The Big Three Chains",
        body: [
          "Prisma and Lidl are usually the cheapest everyday options and a good default for a student budget. Prisma (inside larger shopping centres) is a hypermarket. Meaning you will find food plus clothes, electronics and homeware in one trip, useful for your first big move-in shop.",
          "Lidl can also be found in different locations across the city.",
          "S-market is also another option for students living in Kortepohja student village. You will also find S-Market in City Center.",
          "K-group's shops are also another option for buying daily necessary items. You will find K-Market/K-City Market/K-Supermarket in different locations. "
        ],
        tip: "Normally products of 'Xtra' and 'Coop' brands are the cheapest."
      },
      {
        heading: "Discounts and Offers",
        body: [
          "There are many discounts and offers on different products throughout the year.",
          "To avail different discounts and offers in Prisma and S-Market, you will need a S-Pankki Bank Card/S-Etukortti Card. You will often see an orange sticker mentioning 30% discount on different products. If you checkout after 8 PM, you will get 60% discount on the products that has 30% discount sticker on it. The bakery items in Prisma and S-Market can be availed in 60% discount if you check-out the products after 8 PM.",
          "You will need to open an account in Lidl-Plus app to avail discounts from Lidl. Scan the QR code from the Lidl Plus app when chechking out and you will avail the discounts.",
          "You can open a K-Plussa account with your student credentials to avail different discounts going on across K-Market/K-City Market/K-Supermarket."
        ],
      },
      {
        heading: "Second Hand Shops",
         body: [
          { text: "You can visit second hand shops if you want to save some money. Uniqtori is one of the largest second hand shop.", link: { label: "Uniqtori", url: "https://maps.app.goo.gl/5MRX3xuP8wvRgBKx6", type: "map" } },
          { text: "Another useful place to get second-hand items is Tori app. You will get many usefull stuff from the Tori app in cheap price, sometimes even as free giveaway. The app is in Finnish only. But, there is always google translate!", link: { label: "Tori", url: "https://www.tori.fi/", type: "web" } },
          { text: "Sovatek is also another useful place for getting second-hand items specially furnitures.", link: { label: "Sovatek", url: "https://maps.app.goo.gl/dssqqpECwqJcjEby7", type: "map" } },
        ],
      },
      {
        heading: "The Deposit System (pantti)",
        body: [
          "Almost every plastic bottle and can has a small deposit built into the price. Return them to the machines at the entrance of any supermarket and you will receive a receipt which you can redeem from that supermarket.",
        ],
      },
      {
        heading: "Asian Shops",
        body: [
          "There are a number of Asian shops across the city center from where you can find different products of Asian origin.",
          { text: "Antalya Market", link: { label: "Antalya Market", url: "https://maps.app.goo.gl/4Br8gbNKFVK8Srhd8", type: "map" } },
          { text: "Silk Market", link: { label: "Silk Market", url: "https://maps.app.goo.gl/qtSHuSv12hRgzDwE8", type: "map" } },
          { text: "Manning Asian Market", link: { label: "Manning Asian Market", url: "https://maps.app.goo.gl/AcK3sa93PFsd7YVC6", type: "map" } },
          { text: "Deshi Bazaar", link: { label: "Deshi Bazaar", url: "https://maps.app.goo.gl/BoZdAsGyaZmq2hKw8", type: "map" } },
        ],
      },
    ],
  },
  {
    slug: "transport",
    title: "Getting around",
    eyebrow: "Moving",
    blurb:
      "Bicycles, buses, and how to survive the switch from one to the other when the snow arrives.",
    accent: "lake",
    sections: [
      {
        heading: "Bicycle - The Default For Three Seasons",
        body: [
          "Jyväskylä is compact, scenically beautiful and built for cycling from spring through autumn.",
          "Bring a lock, lights and reflector (legally required after dark),  and expect to switch to studded winter tyres or walking/bus once real snow settles in - usually from late November.",
          { text: "A second-hand bike is the cheapest way to get one - check Tori.fi and Facebook Marketplace for getting deals on second-hand bikes.", link: { label: "Tori", url: "https://www.tori.fi/", type: "web" } },
        ],
      },
      {
        heading: "Linkki - The Local Bus",
        body: [
          "Linkki is Jyväskylä's bus network and the easiest way around once cycling gets hard. A travel card loaded with a monthly pass is far cheaper per ride than paying cash on board.",
          { text: "Visit the Linkki service point to set up a card, or manage top-ups through the Linkki app/R-kioskis once you have one.", link: { label: "Linkki service point", url: "https://maps.app.goo.gl/zf9PZw8AHawuMNqq7", type: "map" } },
        ],
        tip: "Students often qualify for a discounted fare - bring your student ID when you register the card. A zone covers almost the whole region needed for students.",
      },
      {
        heading: "Trains & Long-Distance Buses",
        body: [
          { text: "Jyväskylä's train station connects to Helsinki, Tampere, and beyond. Book through VR - student discounts apply with a valid ISIC or Finnish student card.", link: { label: "VR", url: "https://www.vr.fi/en", type: "web" } },
          "Different long-distance buses connect Jyväskylä to Helsinki, Tampere, and beyond. Student discounts apply with a valid ISIC or Finnish student card.",
          { text: "Onni Bus", link: { label: "Onni Bus", url: "https://www.onnibus.com/home", type: "web" } },
          { text: "Flix Bus", link: { label: "Flix Bus", url: "https://www.flixbus.fi/", type: "web" } },
        ],
      },
      {
        heading: "Scooters",
        body: [
          "You can also commute with scooters of Ryde or Voi. Install their respective apps, find a scooter, scan the QR code on the scooter and you are ready to go.",
        ],
      },
    ],
  },
  {
    slug: "housing",
    title: "Housing",
    eyebrow: "Living",
    blurb:
      "Student housing providers, what a Finnish lease actually asks of you, and moving-in basics.",
    accent: "spruce",
    sections: [
      {
        heading: "Student housing providers",
        body: [
          { text: "KOAS is one of the student housing operators in Jyväskylä, offering furnished and unfurnished rooms and shared apartments aimed specifically at students, usually cheaper than the open market.", link: { label: "KOAS", url: "https://www.koas.fi/", type: "web" } },
          { text: "Soihtu is another option for student housing in Jyväskylä, offering furnished and unfurnished rooms and shared apartments aimed specifically at students.", link: { label: "Soihtu", url: "https://soihtu.fi/", type: "web" } },
          "Apply as early as your acceptance letter allows - good units near campus fill up fast in July and August.",
        ],
      },
      {
        heading: "What Finnish leases expect",
        body: [
          "Expect to pay a deposit (usually one month's rent) before moving in, and to give one month's notice before moving out.",
          "You'll need a Finnish bank account or an international card that accepts recurring transfers for rent day one.",
        ],
        tip: "Check the apartment thoroughly immediately after moving in. Click photos of any sign of damage and submit a fault report to avoid a fine because of the damage not done by you.",
      },
      {
        heading: "Move-in checklist",
        body: [
          "Register your address with DVV (the Digital and Population Data Services Agency) once you have a lease - this underpins almost every other registration you'll do here.",
          "Basic furnished rooms usually still need bedding and kitchenware - these are cheap second-hand or from Prisma/Tokmanni.",
        ],
      },
    ],
  },
  {
    slug: "id-and-banking",
    title: "Bank account & Finnish ID",
    eyebrow: "Admin",
    blurb:
      "The paperwork chain that unlocks everything else: DVV, a personal identity code, and your first bank account.",
    accent: "lakedeep",
    sections: [
      {
        heading: "The order that actually works",
        body: [
          "This order of registration usually is required for the Degree students.",
          "1. Residence permit or right of registration first.",
          { text: "2. Register with DVV(Finnish Population Service). Try to get an appointment beforehand so that you don't need to wait for a long time. If you don't have an appointment, try to visit early in the morning for Walk-in appointments.", link: { label: "DVV Office", url: "https://maps.app.goo.gl/4rMnHYns6wrfvA817", type: "map" } },
          "3. After registering at DVV office, go to the police station right at the opposite of DVV office. Apply for a Finnish ID card/Police Card there.",
          { text: "4. After getting the Finnish ID Card/Police Card, it is easier to process the next steps. The next steps include opening a bank account and registering in Kela for healthcare.", link: { label: "Kela Office", url: "https://maps.app.goo.gl/HB61b4gwHmCP5XQq9", type: "map" } },
        ],
      },
      {
        heading: "Opening a bank account",
        body: [
          "S-Pankki, Nordea and OP are common choices among students. Book an appointment in advance or opt for walk-ins. Bring your passport, residence permit and proof of address. Having the Finnish ID Card with you will make the process faster.",
          "A Finnish bank account (and the online banking credentials that come with it) is also how you'll eventually get your strong digital identity, used to log into almost every government service.",
        ],
        tip: "This step has the longest lead time of anything on this page. Start it in your first week. But it is better to start after having a Finnish ID card.",
      },
    ],
  },
  {
    slug: "weather-and-clothing",
    title: "Weather & what to wear",
    eyebrow: "Surviving",
    blurb:
      "What the daylight swing actually feels like, and how to dress for a Finnish winter without overspending.",
    accent: "ink",
    sections: [
      {
        heading: "The light, not just the cold, is the adjustment",
        body: [
          "Jyväskylä sits around 62°N. Midsummer brings close to 19 hours of daylight; midwinter drops to under 6. The cold is manageable with the right clothes - the darkness is the part most new arrivals underestimate.",
          "A daylight lamp, a consistent sleep schedule, and getting outside during the light hours you do get all help more than people expect.",
        ],
      },
      {
        heading: "Layering, not one big coat",
        body: [
          "A base layer (merino or synthetic, never cotton), a mid layer for warmth, and a windproof/waterproof shell outperforms a single heavy coat and is easier to adjust across a school day.",
          "Good winter boots and proper mittens over gloves matter more than most people budget for - buy these in Finland rather than bringing summer-climate gear.",
        ],
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    eyebrow: "Staying well",
    blurb: "Where to go for a check-up, a prescription, or an emergency.",
    accent: "spruce",
    sections: [
      {
        heading: "Student health services",
        body: [
          "Degree students are generally entitled to services through FSHS/YTHS (Finnish Student Health Service) or the regional public health system, depending on your status - confirm which applies to you at enrolment.",
        ],
      },
      {
        heading: "Pharmacies (apteekki)",
        image: {
          src: "/images/apteeki.jpg",
          alt: "Apteekki in Jyväskylä",
          caption: "Apteekki",
        },
        body: [
          "Recognisable by a green cross sign. Many common medications that are over-the-counter elsewhere require a pharmacist's recommendation or a prescription here - ask, they're used to explaining it.",
        ],
      },
      {
        heading: "Emergencies",
        body: [
          "112 is the general emergency number for police, fire, and ambulance across Finland, and operators speak English.",
        ],
      },
    ],
  },
  {
    slug: "sim-and-internet",
    title: "SIM card & internet",
    eyebrow: "Staying connected",
    blurb: "Getting a Finnish number and data plan sorted in your first days.",
    accent: "lake",
    sections: [
      {
        heading: "Prepaid SIMs",
        body: [
          "DNA, Elisa, and Telia are the three major carriers, all with prepaid SIMs available at their stores or in supermarket electronics sections - no Finnish ID required to start.",
          "A Finnish number becomes useful fast: banks, healthcare bookings, and parcel pickups often text verification codes to it.",
        ],
      },
      {
        heading: "Home broadband",
        body: [
          "Student housing sometimes includes internet in the rent - check before ordering your own. If not, the same three carriers offer home broadband, often self-installed with a router they mail you.",
        ],
      },
    ],
  },
  {
    slug: "community",
    title: "People & community",
    eyebrow: "Belonging",
    blurb:
      "Where the first friendships actually happen, and the small rituals worth joining.",
    accent: "ember",
    sections: [
      {
        heading: "Student organisations",
        body: [
          "JYY (the student union) and subject-specific guilds run most of the orientation events, city tour groups and sports groups worth showing up to in your first month - most of your first friends will come from here.",
        ],
      },
      {
        heading: "Sauna",
        body: [
          "It's a genuine social ritual, not just a wellness activity. Student housing buildings usually have a shared sauna that can be used publicly or privately. Having a shift with hallmates is one of the easiest ways to actually meet them.",
        ],
      },
      {
        heading: "Meeting Jonathan", 
        body: [
          "Looking for a fresh haircut and a great way to connect? Head over to Cafe Agape to meet Jonathan, a local barber offering free haircuts for students. For Jonathan, the only price of admission is good company and meeting new faces in town. To get in the chair, gather a group of 3 to 4 friends and book a shared group slot together. Check out the details below to view the shop's location and reach out directly to reserve your group's session.",
          { text: "Contact Person: Jonathan"}, 
          { text: "Place: On top of Cafe Agape"},
          { text: "Contact & Booking: +358440100901 "},
          { text: "Requirement: Groups of 3-4 people per booked slot", link: { label: "Jonathan's Barbershop", url: "https://maps.app.goo.gl/Q8unHH9PQP121w5U6", type: "map" } },
        ],
      },
    ],
  },
  {
    slug: "roaming",
    title: "Roaming Around Jyväskylä",
    eyebrow: "Roaming",
    blurb:
      "Places to visit around beautiful Jyväskylä.",
    accent: "ember",
    sections: [
      {
        heading: "Jyväskylä Tourist Guide", 
        body: [
          { text: "Looking to roam around in Jyväskylä? Visit the official page of 'Visit Jyväskylä Region' and you will find the listings of places that you can visit throughtout your stay here.", link: { label: "Visit Jyväskylä Region", url: "https://visitjyvaskyla.fi/en/", type: "web" } },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// NEIGHBORHOODS - a second, separate layer of content alongside `categories`.
// Where `categories` covers topics (Transport, Groceries, ...), this covers
// *places students actually live*, with the hyper-local detail a topic page
// can't hold: nearest bus stop, nearest shop, laundry room, sauna sign-up.
//
// Add a new neighborhood by adding another object here - a page appears
// automatically at /live/<slug>. Follow the same section shape as Myllyjärvi.
// ─────────────────────────────────────────────────────────────────────────

export const neighborhoods = [
  {
    slug: "myllyjarvi",
    name: "Myllyjärvi",
    eyebrow: "Where you live",
    blurb:
      "KOAS family and studio blocks a short bus ride northeast of the city centre - quiet, residential, and a bit of a walk from campus.",
    accent: "spruce",
    sections: [
      {
        heading: "Getting to campus",
        body: [
          "The fastest route towards JYU or JAMK is by Linkki bus rather than on foot - Myllyjärvi sits far enough out to walk towards your university. You can catch number '12' bus from 'Myllypolku 1' bus stop to go towards City Center/University. On week days, there is also another option, that is - number '14' bus leaving from 'Myllypolku 2' bus stop.",
          { text: "Myllypolku 1 Bus Stop", link: { label: "Myllypolku 1", url: "https://maps.app.goo.gl/mFMyunffPsCtaH878", type: "map" } },
          { text: "Myllypolku 2 Bus Stop", link: { label: "Myllypolku 2", url: "https://maps.app.goo.gl/6xWGZjSBQK8YyzFo8", type: "map" } },
          "Cycling is very doable from spring to autumn and roughly halves the time a bus timetable gap would cost you.",
        ],
      },
      {
        heading: "Closest everyday shops",
        body: [
          "There's 3 supermarkets (Prisma, Lidl, K-City Market) within easy walking distance from Myllyjärvi. If you want to go there bus bus, hop on to number '12' bus that is heading towards Kangaslampi, and get off at 'Keljonkeskus' bus stop.",
        ],
        map: { label: "Nearest supermarket", url: "https://maps.app.goo.gl/DLGK12biicB2FaFY8" }, // UPDATE
      },
      {
        heading: "Laundry",
        body: [
          "Building A and F have laundry rooms. Choose which one is nearest to your building. ",
          { text: "From the koas portal, book laundry slots. You will receive pincodes for each of the booking. Use the pincode to access the laundry rooms. You will get total of 5 slots (Washer + Dryer) every week.", link: { label: "KOAS portal", url: "https://asukassivut.koas.fi/login", type: "web" } },
        ],
        tip: "Be respectful of other people's booked slots. Don't occupy the machines when it is not your booked time-slot.",
      },
      {
        heading: "Storage",
        body: [
          { text: "Every building has storage facilities. The storage is located in the ground floor of every building. Book a storage from the KOAS portal, and use the storage for keeping your luggage or other stuff.", link: { label: "KOAS portal", url: "https://asukassivut.koas.fi/login", type: "web" } },
        ],  
      },
      {
        heading: "Sauna",
        body: [
          "Every building in Myllyjärvi have Sauna rooms. You can use it for free in the public slots. The schedule of public sauna slots are listed in the 'Documents' section of the KOAS portal titled - 'Sauna_ohjeet_instructions_Myllyjärvi.pdf'.",
          "If you intend to use the Sauna alone or with some friends only, you can book a private slot of Sauna in your building for a small fee.",
        ],  
        tip: "Check the compatible Sauna building that you can enter with your keys. Not all the building's Sauna room will open with your keys.",
      },
      {
        heading: "Garbage Disposal",
        body: [
          "There are two garbage disposal spaces in Myllyjärvi. One is located at the far end of the large parking lot infront of the buildings C and D. The other is located near F building. Read the instructions there and throw your garbage accordingly.",
        ],  
      },
      {
        heading: "Gym",
        body: [
          { text: "The gym is located at the ground floor of F building in Myllyjärvi. Book a slot from the KOAS portal and use the gym accordingly.", link: { label: "KOAS portal", url: "https://asukassivut.koas.fi/login", type: "web" } },
        ],  
      },
      {
        heading: "Lounge/Common Rooms",
        body: [
          "You can book the Lounge/Common Room if you are looking for a common space. Book time slots from the KOAS portal. You can have a party/watch movie or games/play board games there. Community parties are also hosted there.",
        ],  
        tip: "Be respectful of the quiet hour (After 10 PM). You have to leave the common room before 10 PM. Try to clean up as much as possible when leaving after using the common room so that it is not inconvenient for the next user.",
      },
      {
        heading: "Recycling Hub",
        body: [
          "Myllyjärvi has it's own recycling hub located in the ground floor of building B. You can leave your stuff there which are not necessary so that other people can use them. Vice versa, you can visit there to find any second-hand item that you need which was left by other people.",
        ],  
      },
      {
        heading: "Community",
        body: [
          "Being further from the centre means Myllyjärvi residents lean more on each other - courtyard grilling in summer and shared sauna nights are the easiest way to actually meet neighbours rather than just passing them in the stairwell.",
        ],
        tip: "Introduce yourself in the community group chat early - that's also usually how spare sauna slots and leftover moving-out furniture get passed around.",
      },
      {
        heading: "Good To Know",
        body: [
          "You will get any kind of help from the Whatsapp Community group chat of Myllyjärvi. If you haven't join yet, you will find the QR code to join the community in the notice board of your building located ground floor.",
        ],
      },
    ],
  },
  // {
  //   slug: "kortepohja",
  //   name: "Kortepohja",
  //   eyebrow: "Where you live",
  //   blurb:
  //     "Soihtu, Kortepohja",
  //   accent: "spruce",
  //   sections: [
  //     {
  //       heading: "Getting to campus",
  //       body: [
  //         "The fastest route into Seminaarinmäki or Ylistönrinne is by Linkki bus rather than on foot - Myllyjärvi sits far enough out that walking eats a real chunk of your morning.", // UPDATE: confirm exact bus line numbers and stop name
  //         "Cycling is very doable from spring to autumn and roughly halves the time a bus timetable gap would cost you.",
  //       ],
  //       tip: "Screenshot the Linkki timetable for your stop and keep it on your home screen - service thins out in the evenings and on weekends.",
  //       map: { label: "Nearest bus stop on Google Maps", url: "#" }, // UPDATE
  //     },
  //     {
  //       heading: "Closest everyday shops",
  //       body: [
  //         "There's a supermarket within easy walking distance of most Myllyjärvi blocks - enough for daily and weekly shopping without needing the bus.", // UPDATE: name the actual nearest shop
  //         "For a bigger stock-up run (Prisma-scale), plan it around a trip into town rather than on foot.",
  //       ],
  //       map: { label: "Nearest supermarket on Google Maps", url: "#" }, // UPDATE
  //     },
  //     {
  //       heading: "In your building",
  //       body: [
  //         "KOAS blocks in Myllyjärvi typically have a shared laundry room booked via a sign-up sheet or booking app on the entrance floor - ask your building's WhatsApp group if you can't find it in your first week.", // UPDATE: confirm booking method for this specific block
  //         "Sauna turns are usually assigned by apartment or by weekday - check the noticeboard near the laundry room, that's where the schedule tends to live.",
  //       ],
  //       tip: "Introduce yourself in the building group chat early - that's also usually how spare sauna slots and leftover moving-out furniture get passed around.",
  //     },
  //     {
  //       heading: "Community",
  //       body: [
  //         "Being further from the centre means Myllyjärvi residents lean more on each other - courtyard grilling in summer and shared sauna nights are the easiest way to actually meet neighbours rather than just passing them in the stairwell.",
  //       ],
  //     },
  //     {
  //       heading: "Good to know",
  //       body: [
  //         "Being on the edge of town means quieter nights and easier parking/bike storage, at the cost of a longer commute - worth weighing if you're choosing between Myllyjärvi and a more central block.",
  //         "Waste sorting points (mixed, bio, cardboard, glass) are usually shared between a few buildings rather than per-block - check where yours is before your first big cardboard pile from move-in.",
  //       ],
  //     },
  //   ],
  // },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug);
}
