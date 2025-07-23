// Spirit Guide messages organized by theme
export const spiritGuideMessages = {
  "lavender-toast": [
    "Some days bloom slowly. You're still blossoming.",
    "You are the soft thunder that moves mountains over time.",
    "Bravery today might be eating breakfast. That still counts.",
    "Your quiet persistence is the loudest miracle.",
    "Even moss climbs brick walls—with time and tenderness.",
    "Warm socks and honest effort are today's hero tools.",
    "You are healing the way lavender scents the air: subtly, fully.",
    "That small thing you did matters to the stars, too.",
    "Showing up is poetic resistance.",
    "Today's victory might be just being. That's enough."
  ],
  
  "cherry-soda-spark": [
    "Pop open today like a cherry soda—sweet, fizzy, impossible to ignore.",
    "Your energy is carbonated joy. Let it bubble over.",
    "Some victories taste like maraschino dreams and midnight giggles.",
    "You're the sparkle in an otherwise ordinary Tuesday.",
    "Dance through today like confetti in a celebration tornado.",
    "Your enthusiasm is contagious. Spread it like strawberry jam.",
    "Be the cherry on top of your own sundae life.",
    "Fizz with the audacity of someone who knows they matter.",
    "Your brightness makes the world a little less gray.",
    "Today calls for cherry-red lipstick courage and soda-pop dreams."
  ],
  
  "midnight-peony": [
    "In the velvet darkness, you bloom with ancient wisdom.",
    "Your depths hold galaxies others cannot fathom.",
    "Magic whispers through your midnight thoughts.",
    "You are poetry written in shadows and starlight.",
    "The moon recognizes your quiet power.",
    "Your darkness is not absence—it's profound presence.",
    "Night-blooming flowers understand your timing.",
    "You carry mysteries that daylight cannot touch.",
    "Your soul speaks in the language of deep waters.",
    "In the cathedral of night, you are both prayer and answer."
  ],
  
  "croissant-glow": [
    "Today smells like cardamom ambition and chamomile calm. Stir and serve.",
    "You're buttery comfort in a world that needs more warmth.",
    "Wrap yourself in the golden hour of your own becoming.",
    "Some victories taste like honey and morning coffee.",
    "Your presence is breakfast sunshine on someone's cloudy day.",
    "Rise like dough in a warm kitchen—slowly, surely, beautifully.",
    "You are the comfort food of friendship.",
    "Golden moments are made of ordinary magic and you.",
    "Bake your dreams with patience and a pinch of mischief.",
    "Today's forecast: partly golden with a chance of cozy miracles."
  ],
  
  "spicy-meteor": [
    "Crash through today with the audacity of a cosmic event.",
    "You are stardust with an attitude problem—and that's perfect.",
    "Set the universe on fire with your ridiculous brilliance.",
    "Some victories require the chaos of a beautiful explosion.",
    "You're not too much—the world is just not enough.",
    "Blaze through today like a meteor with a mission.",
    "Your fire burns so bright it makes stars jealous.",
    "Chaos and creation dance together in your cosmic soul.",
    "You are the big bang of someone's quiet universe.",
    "Today needs your particular brand of beautiful mayhem."
  ],
  
  "moss-matcha": [
    "Grow quietly, like moss on ancient stones.",
    "Your pace is sacred. The earth approves.",
    "Some victories steep slowly, like perfect tea.",
    "You are the calm in a world addicted to noise.",
    "Root yourself in what matters; let the rest fall away.",
    "Your steadiness is a revolution in an anxious world.",
    "Breathe like forests: deep, patient, life-giving.",
    "You are the green thought in a green shade.",
    "Today calls for mushroom wisdom and moss-soft steps.",
    "Your gentle presence heals more than you know."
  ],
  
  "prism-static": [
    "You are the glitch in the matrix that makes it beautiful.",
    "Refract today's light into impossible rainbows.",
    "Your digital soul holds analog dreams.",
    "Some victories happen in the space between pixels.",
    "You are the color that doesn't exist until you create it.",
    "Static is just the universe trying to tune into your frequency.",
    "Your chaos is someone else's breakthrough pattern.",
    "Glitch forward with the confidence of a cosmic error.",
    "You break the rules so beautifully that new ones are born.",
    "Today's weather: partly cloudy with scattered bursts of impossible."
  ],
  
  "sundae-punks": [
    "Rebel with a cause: spreading sweetness in a bitter world.",
    "You're the cherry on top of everyone's boring day.",
    "Some victories taste like ice cream for breakfast.",
    "Your punk rock heart beats in pastel rhythms.",
    "Riot gently with rainbow sprinkles and radical kindness.",
    "You're too sweet for this world—and that's exactly what it needs.",
    "Mix rebellion with compassion and serve it with a smile.",
    "Your softness is the hardest thing to be.",
    "Today calls for polka dot courage and bubblegum dreams.",
    "You're the reason someone believes in happy endings."
  ]
};

export const getThemeMessages = (themeId: string): string[] => {
  return spiritGuideMessages[themeId as keyof typeof spiritGuideMessages] || spiritGuideMessages["croissant-glow"];
};

export const getRandomMessage = (themeId: string): string => {
  const messages = getThemeMessages(themeId);
  return messages[Math.floor(Math.random() * messages.length)];
};