const path = require("path");
const rootPath = path.dirname(__dirname);

const { sideBarTool } = require(path.join(__dirname, "./utils/index.js"));

let unDirIncludes = ["node_modules", "assets", "public"];

let SuffixIncludes = ["md"];

let sidebar = sideBarTool.genSideBarGroup(
  rootPath,
  unDirIncludes,
  SuffixIncludes
);
module.exports = {
  title: "IELTS speaking repo",
  dest: "./dist",
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
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/nofx3000/ielts-speaking" },
    ],
    sidebar,
  },
};
