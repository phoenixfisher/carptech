export interface LessonObjective {
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  objectives: LessonObjective[];
}

export const lessons: Lesson[] = [
  {
    id: "internet-basics",
    title: "Internet Basics",
    description: "Learn how to browse the web, use search engines, and stay safe online.",
    icon: "🌐",
    difficulty: "Beginner",
    objectives: [
      { title: "Opening a Web Browser", description: "Learn how to find and open your web browser (Chrome, Firefox, Safari, or Edge) on your computer or tablet." },
      { title: "Using a Search Engine", description: "Learn how to type a question into Google and find helpful results." },
      { title: "Staying Safe Online", description: "Understand how to spot suspicious websites and avoid scams." },
    ],
  },
  {
    id: "email-essentials",
    title: "Email Essentials",
    description: "Master sending, receiving, and organizing your emails with confidence.",
    icon: "📧",
    difficulty: "Beginner",
    objectives: [
      { title: "Composing an Email", description: "Learn how to write a new email, add a subject line, and send it to someone." },
      { title: "Replying and Forwarding", description: "Understand the difference between Reply, Reply All, and Forward." },
      { title: "Managing Your Inbox", description: "Learn how to delete, archive, and organize emails into folders." },
    ],
  },
  {
    id: "video-calling",
    title: "Video Calling Family",
    description: "Connect face-to-face with loved ones using video calls on any device.",
    icon: "📹",
    difficulty: "Beginner",
    objectives: [
      { title: "Setting Up a Video Call", description: "Learn how to start a video call using Zoom, FaceTime, or Google Meet." },
      { title: "Camera and Microphone", description: "Understand how to turn your camera and microphone on and off during a call." },
      { title: "Troubleshooting Common Issues", description: "Learn what to do when you can't hear or see the other person." },
    ],
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description: "Save time with handy keyboard tricks that make everyday tasks faster.",
    icon: "⌨️",
    difficulty: "Intermediate",
    objectives: [
      { title: "Copy and Paste", description: "Master Ctrl+C (copy) and Ctrl+V (paste) to move text around easily." },
      { title: "Undo and Redo", description: "Learn how Ctrl+Z can undo mistakes and Ctrl+Y can redo them." },
      { title: "Selecting Text", description: "Learn how to highlight text using your keyboard instead of your mouse." },
    ],
  },
  {
    id: "phone-basics",
    title: "Smartphone Basics",
    description: "Get comfortable with your smartphone — apps, calls, texts, and photos.",
    icon: "📱",
    difficulty: "Beginner",
    objectives: [
      { title: "Making Calls and Texts", description: "Learn how to make phone calls and send text messages." },
      { title: "Downloading Apps", description: "Understand how to find and install apps from the App Store or Google Play." },
      { title: "Taking and Sharing Photos", description: "Learn to take photos and send them to family and friends." },
    ],
  },
  {
    id: "passwords-security",
    title: "Passwords & Security",
    description: "Create strong passwords and keep your accounts safe from hackers.",
    icon: "🔒",
    difficulty: "Intermediate",
    objectives: [
      { title: "Creating Strong Passwords", description: "Learn the rules for making passwords that are hard to guess." },
      { title: "Using a Password Manager", description: "Understand how apps can safely remember all your passwords for you." },
      { title: "Recognizing Scams", description: "Learn to identify phishing emails and suspicious messages." },
    ],
  },
];
