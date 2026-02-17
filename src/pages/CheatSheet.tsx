import Navbar from "@/components/Navbar";

const tips = [
  { category: "Keyboard Shortcuts", items: [
    { shortcut: "Ctrl + C", description: "Copy selected text or item" },
    { shortcut: "Ctrl + V", description: "Paste what you copied" },
    { shortcut: "Ctrl + Z", description: "Undo your last action (fix a mistake!)" },
    { shortcut: "Ctrl + A", description: "Select everything on the page" },
    { shortcut: "Ctrl + F", description: "Find a word on any page" },
    { shortcut: "Ctrl + P", description: "Print the current page" },
  ]},
  { category: "Internet Tips", items: [
    { shortcut: "Ctrl + T", description: "Open a new browser tab" },
    { shortcut: "Ctrl + W", description: "Close the current tab" },
    { shortcut: "Ctrl + L", description: "Jump to the address bar to type a website" },
    { shortcut: "F5", description: "Refresh the current page" },
    { shortcut: "Ctrl + D", description: "Bookmark the current page" },
  ]},
  { category: "Safety Reminders", items: [
    { shortcut: "🔒 HTTPS", description: "Look for the lock icon in your browser — it means the site is secure" },
    { shortcut: "🚫 Scams", description: "Never share your password or bank details by email" },
    { shortcut: "📧 Suspicious Emails", description: "If an email looks too good to be true, it probably is — delete it!" },
    { shortcut: "🔑 Passwords", description: "Use different passwords for different websites" },
  ]},
];

const CheatSheet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero text-hero-foreground py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-senior-3xl text-center">Quick Reference Cheat Sheet</h1>
          <p className="text-center text-senior-base opacity-80 mt-2">Print this page or bookmark it for quick access!</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 space-y-10">
          {tips.map((group) => (
            <div key={group.category}>
              <h2 className="text-senior-2xl mb-4">{group.category}</h2>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 ${
                      i < group.items.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-bold text-senior-lg text-primary min-w-[140px] font-mono">
                      {item.shortcut}
                    </span>
                    <span className="text-senior-base text-foreground">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CheatSheet;
