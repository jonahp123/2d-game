export const scaleFactor = 4;

// New configuration for initial auto-navigation
export const initialRedirect = {
  enabled: true,
  message: "Would you like to view a simpler version of this website?",
  redirectURL: "https://marcvidal.vercel.app"
};

export const dialogueData = {
  pc: {
    text: `Welcome to my interactive portfolio! Here you can find information about my projects, skills, and background.`,
    withRedirect: true,
    redirectText: "Would you like to visit my easier-to-navigate website?",
    redirectURL: "https://marcvidal.vercel.app"
  },
  "cs-degree": `This is my CS degree. I hung it on the wall because I'm proud of it. It was a very theoretical degree but I think it gave me a good foundation.`,
  "sofa-table": `That's my sofa. I like to relax here and watch YouTube. 
  I also make game programming tutorials on YouTube. Go sub to <a href="https://youtube.com/@jslegenddev" target="_blank">my channel</a>! (If you like the content)
  You'll learn how I built this portfolio you're currently playing through!`,
  tv: `That's my TV. I've been watching tech youtubers a lot recently like :
   <a href="https://www.youtube.com/@ThePrimeTimeagen" target="_blank">Theprimeagen</a>, <a href="https://www.youtube.com/@t3dotgg" target="_blank">Theo - t3.gg</a>,
  <a href="https://www.youtube.com/@PirateSoftware" target="_blank">PirateSoftware</a> (sometimes) and <a href="https://www.youtube.com/@MelkeyDev" target="_blank">Melkey</a>!`,
  bed: `This where I sleep. Great ideas comes when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`,
  resume: `This is my desk and on it is my resume. <a href="https://github.com/JSLegendDev/Resume/blob/main/JSLegend%20Resume-1.pdf" target="_blank">Check it out?</a>
  Contact me at jslegend@protonmail.com if you have any interesting job opportunities!`,
  projects: `Info about this portfolio : It's made with the Kaboom.js library which is a library for making games in JavaScript.
  Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas. Learn more about how to use
  Kaboom.js by watching some of my tutorials <a href="https://youtube.com/@jslegenddev" target="_blank">here</a>.`,
  library: `There are a lot of programming books on my shelves. There is even one in French (I also speak French btw).
  I probably only read one of them. Who else compulsively buys technical books without ever finishing them?`,
  exit: `If you want to exit JSLegendDev's portfolio, just close the tab.`,
};
