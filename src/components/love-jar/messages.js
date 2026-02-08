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
      { id: 'love-1', text: 'You are the first thing I think of when I wake up and the last thing I think of before I sleep. I love you.' },
      { id: 'love-2', text: 'I just wanted to remind you that you are beautiful, intelligent, and kind. I am so lucky to be with you.' },
      { id: 'love-3', text: 'My favorite place in the entire world is right next to you.' },
      { id: 'love-4', text: 'I love the way you smile. It literally lights up my whole world.' },
      { id: 'love-5', text: 'Life is just better with you in it. Simple as that.' },
      { id: 'love-6', text: 'Thank you for being my best friend and my partner. I love you more than words can say.' },
      { id: 'love-7', text: 'Even when we are apart, I carry you in my heart. Always.' },
      { id: 'love-8', text: 'You make me want to be a better person. Thank you for your endless love and support.' },
      { id: 'love-9', text: 'I promise to always be there for you, through the good times and the bad.' },
      { id: 'love-10', text: 'To me, you are perfect. I wouldn\'t change a single thing about you.' },
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
      { id: 'courage-1', text: 'I believe in you. You have handled everything life has thrown at you so far, and you will handle this too.' },
      { id: 'courage-2', text: 'You are stronger than you think. Take a deep breath and keep going.' },
      { id: 'courage-3', text: 'I am so proud of how far you have come. Don\'t stop now.' },
      { id: 'courage-4', text: 'It is okay to be scared. Courage is acting in spite of fear. You got this.' },
      { id: 'courage-5', text: 'Your potential is limitless. Don\'t let doubt hold you back.' },
      { id: 'courage-6', text: 'Remember why you started. Keep your eyes on the prize.' },
      { id: 'courage-7', text: 'I am right here in your corner, cheering you on every step of the way.' },
      { id: 'courage-8', text: 'You are capable of amazing things. Trust in yourself.' },
      { id: 'courage-9', text: 'Every challenge is an opportunity to grow. You are growing beautifully.' },
      { id: 'courage-10', text: 'You are a warrior. Never forget that.' },
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
      { id: 'hope-1', text: 'The best is yet to come. I truly believe that for us.' },
      { id: 'hope-2', text: 'Dreams do come true. We are living proof of that.' },
      { id: 'hope-3', text: 'Every day is a fresh start. Today is going to be a good day.' },
      { id: 'hope-4', text: 'Keep shining your light. The world needs it.' },
      { id: 'hope-5', text: 'Something wonderful is about to happen. I can feel it.' },
      { id: 'hope-6', text: 'Your future is as bright as your smile.' },
      { id: 'hope-7', text: 'Believe in the magic of new beginnings.' },
      { id: 'hope-8', text: 'We are building a beautiful life together, brick by brick.' },
      { id: 'hope-9', text: 'Hold on to hope. It is the anchor of the soul.' },
      { id: 'hope-10', text: 'I look forward to every tomorrow with you.' },
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
      { id: 'comfort-1', text: 'I am sending you a massive hug right now. Can you feel it?' },
      { id: 'comfort-2', text: 'It is okay to rest. It is okay to not be okay. I love you regardless.' },
      { id: 'comfort-3', text: 'Take a deep breath. This too shall pass.' },
      { id: 'comfort-4', text: 'I am here for you. Always. Whatever you need.' },
      { id: 'comfort-5', text: 'You are safe. You are loved. You are not alone.' },
      { id: 'comfort-6', text: 'Let me carry some of your burden today. Lean on me.' },
      { id: 'comfort-7', text: 'Wish I could be there to hold you tight.' },
      { id: 'comfort-8', text: 'Be gentle with yourself today. You are doing the best you can.' },
      { id: 'comfort-9', text: 'I love you. I love you. I love you. Just in case you needed to hear it.' },
      { id: 'comfort-10', text: 'This moment is just a wav; it will pass. I am your shore.' },
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
      { id: 'joy-1', text: 'Remember that time we couldn\'t stop laughing? I am smiling just thinking about it.' },
      { id: 'joy-2', text: 'You are the most fun person I know. Life is an adventure with you.' },
      { id: 'joy-3', text: 'I hope this message brings a goofy smile to your face!' },
      { id: 'joy-4', text: 'Your happiness is my happiness. Go do something that makes you smile today!' },
      { id: 'joy-5', text: 'You are pure sunshine. Thanks for brightening my life.' },
      { id: 'joy-6', text: 'Sending you a virtual high-five and a kiss!' },
      { id: 'joy-7', text: 'You are awesome! Don\'t let anyone tell you otherwise.' },
      { id: 'joy-8', text: 'I love your laugh. It is music to my ears.' },
      { id: 'joy-9', text: 'Life is good because I have you to share it with.' },
      { id: 'joy-10', text: 'Tag! You\'re it! (Now you have to kiss me next time you see me!)' },
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
