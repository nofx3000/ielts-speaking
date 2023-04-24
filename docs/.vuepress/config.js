const path = require("path");
const rootPath = path.dirname(__dirname);

const { sideBarTool } = require(path.join(__dirname, "./utils/index.js"));

let unDirIncludes = ["node_modules", "assets", "public"];

let SuffixIncludes = ["md"];

let sidebar = sideBarTool.genBaseSideBar(unDirIncludes, SuffixIncludes);
module.exports = {
  title: "IELTS speaking repo",
  themeConfig: {
    displayAllHeaders: true,
    sideBarDepth: 3,
    smoothScroll: true,
    // sidebar: ["/ielts/", "/ielts/a"],
    // sidebar: {
    //   "/ielts/": [
    //     "",
    //     "✅Describe a person you have met who you want to workstudy with",
    //   ],
    // },
    header: "aaa",
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://google.com" },
    ],
    sidebar,
  },
};
