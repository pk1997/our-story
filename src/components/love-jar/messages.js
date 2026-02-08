// Message data structure for Love Jar
// Each topic has 10 messages - customize these with your personal words!

export const topics = [
  {
    id: 'love',
    name: 'Love',
    emoji: '💕', // Keep emoji for fallback or header, but we focus on colors now
    color: 'bg-primary-red', // Tailwind class reference
    cssColor: '#FF1A1A', // Bright Red
    description: 'For when you want to feel loved',
    messages: [
      { id: 'love-1', text: 'Every time I see your dimples, I fall for you all over again. You are the most beautiful thing in my world.' },
      { id: 'love-2', text: 'Distance is just a test to see how far love can travel. My love for you has already traveled to the moon and back.' },
      { id: 'love-3', text: 'I didn\'t just fall in love with you once. I fall in love with you every single day, with every text, every call, every laugh.' },
      { id: 'love-4', text: 'You are my home. No matter where I am in the world, as long as I have you in my heart, I am home.' },
      { id: 'love-5', text: 'I promise to love you when life is easy, and I promise to love you even harder when life is tough. I am yours, forever.' },
      { id: 'love-6', text: 'Thinking of you is my favorite part of the day. Loving you is my favorite part of my life.' },
      { id: 'love-7', text: 'You are the first person I want to tell good news to, and the only person I want to hold when I have bad news.' },
      { id: 'love-8', text: 'Thank you for choosing me. Thank you for loving me. I will spend the rest of my life trying to be worthy of that love.' },
      { id: 'love-9', text: 'Whenever you feel lonely, just put your hand on your heart. I am right there with you. Always.' },
      { id: 'love-10', text: 'To me, you are perfect. Your smile, your kindness, your strength... I wouldn\'t change a single thing about you.' },
    ],
  },
  {
    id: 'courage',
    name: 'Courage',
    emoji: '💪',
    color: 'bg-vibrant-orange',
    cssColor: '#FF8800', // Deep Orange
    description: 'For when you need strength',
    messages: [
      { id: 'courage-1', text: 'I believe in you more than words can say. You have handled everything life has thrown at you, and you will handle this too.' },
      { id: 'courage-2', text: 'It is okay to be scared. Courage isn\'t the absence of fear, it\'s moving forward even when you are trembling. I\'m holding your hand.' },
      { id: 'courage-3', text: 'You are stronger than you think. Take a deep breath. Look how far you have come. I am so proud of you.' },
      { id: 'courage-4', text: 'Don\'t let doubt whisper lies to you. You are capable, you are brilliant, and you are going to crush this.' },
      { id: 'courage-5', text: 'Even on your weakest days, you are still my hero. Rest if you must, but don\'t you dare quit.' },
      { id: 'courage-6', text: 'Remember why you started. Keep your eyes on our future. We are building something amazing together.' },
      { id: 'courage-7', text: 'If you fall, I will be there to catch you. If you need to rest, I will stand guard. You are never fighting alone.' },
      { id: 'courage-8', text: 'You have a fire inside you that nothing can extinguish. Let it burn bright.' },
      { id: 'courage-9', text: 'Every challenge is just a stepping stone to the life we dream of. You are growing beautifully through this.' },
      { id: 'courage-10', text: 'Lift your head up, my love. The world needs your light. You got this.' },
    ],
  },
  {
    id: 'hope',
    name: 'Hope',
    emoji: '✨',
    color: 'bg-electric-blue',
    cssColor: '#00AAFF', // Bright Sky Blue
    description: 'For when you need motivation',
    messages: [
      { id: 'hope-1', text: 'The best is yet to come. I truly, deeply believe that our future is going to be more beautiful than we can imagine.' },
      { id: 'hope-2', text: 'One day, there will be no more goodbyes, only goodnights. Hold on to that thought.' },
      { id: 'hope-3', text: 'Every day is one step closer to us closing the distance forever. We are getting there, step by step.' },
      { id: 'hope-4', text: 'This moment is temporary. Our love is permanent. We will get through this rough patch.' },
      { id: 'hope-5', text: 'I can already see us: old, gray, sitting on a porch somewhere, laughing about these days. We are going to make it.' },
      { id: 'hope-6', text: 'Something wonderful is about to happen. Trust the timing of your life. Trust us.' },
      { id: 'hope-7', text: 'Even the darkest night will end and the sun will rise. You are my sun. Keep shining.' },
      { id: 'hope-8', text: 'We are building a castle brick by brick. Be patient with the foundation. It will be worth it.' },
      { id: 'hope-9', text: 'Hold on to hope. It is the anchor of the soul. Let my love be the wind in your sails.' },
      { id: 'hope-10', text: 'I look forward to every tomorrow with you. You act as my hope when I have none.' },
    ],
  },
  {
    id: 'comfort',
    name: 'Comfort',
    emoji: '🌧️',
    color: 'bg-deep-purple',
    cssColor: '#9D00FF', // Vivid Purple
    description: 'For when you feel down',
    messages: [
      { id: 'comfort-1', text: 'I am sending you the biggest, tightest, warmest virtual hug right now. Close your eyes and feel my arms around you.' },
      { id: 'comfort-2', text: 'It is okay to not be okay. You don\'t always have to be strong. Cry if you need to. I am here to listen.' },
      { id: 'comfort-3', text: 'Take a deep breath. In... and out. This heavy feeling will pass. You are safe.' },
      { id: 'comfort-4', text: 'I wish I could be there to wipe your tears and kiss your forehead. For now, please be gentle with yourself for me.' },
      { id: 'comfort-5', text: 'You are loved beyond measure. Nothing you do or don\'t do can change that. I love you for YOU.' },
      { id: 'comfort-6', text: 'Let me carry some of your burden today. Tell me everything. I am your safe space.' },
      { id: 'comfort-7', text: 'Wrap yourself in a blanket, have some tea, and imagine it\'s me holding you. Rest now, my love.' },
      { id: 'comfort-8', text: 'You are good enough. You are smart enough. You are beautiful enough. You are enough.' },
      { id: 'comfort-9', text: 'I am right here. I am not going anywhere. Lean on me.' },
      { id: 'comfort-10', text: 'This specific worry? It won\'t matter in a year. But my love for you will still be here. Focus on that.' },
    ],
  },
  {
    id: 'joy',
    name: 'Joy',
    emoji: '🎉',
    color: 'bg-forest-green',
    cssColor: '#00CC44', // Bright Lime Green
    description: 'For when you want to smile',
    messages: [
      { id: 'joy-1', text: 'Remember that time we couldn\'t stop laughing? I am smiling just thinking about your laugh right now.' },
      { id: 'joy-2', text: 'You are the most fun person I know. Life is an adventure with you and I wouldn\'t want it any other way.' },
      { id: 'joy-3', text: 'I hope this message brings a goofy smile to your face! (Yes, the one with the dimples!)' },
      { id: 'joy-4', text: 'Your happiness is my priority. Go do something that makes you smile today! You deserve it.' },
      { id: 'joy-5', text: 'You are pure sunshine. Thank you for brightening my life even on the cloudy days.' },
      { id: 'joy-6', text: 'Sending you a million kisses! 😘😘😘 Catch them all!' },
      { id: 'joy-7', text: 'You are awesome! Don\'t let anyone or anything dull your sparkle today.' },
      { id: 'joy-8', text: 'I love your laugh. It is literally my favorite sound in the universe. I want to hear it forever.' },
      { id: 'joy-9', text: 'Life is good because I have you. We are going to have so much fun together in this lifetime.' },
      { id: 'joy-10', text: 'Tag! You\'re it! imagine me ticking you right now! (I promise to let you win... sometimes!)' },
    ],
  },
];

// Get a random message from a topic
export const getRandomMessage = (topicId, openedIds) => {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;

  // Try to get an unread message first
  const unread = topic.messages.filter((m) => !openedIds.includes(m.id));
  const pool = unread.length > 0 ? unread : topic.messages;

  return pool[Math.floor(Math.random() * pool.length)];
};

// Get count of remaining unread messages for a topic
export const getUnreadCount = (topicId, openedIds) => {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return 0;
  return topic.messages.filter((m) => !openedIds.includes(m.id)).length;
};
