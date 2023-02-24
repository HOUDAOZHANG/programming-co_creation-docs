/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "0.准备篇",
      items: [
        "p0/p0-1-prep",
        "p0/p0-2-issues",
        "p0/p0-3-markdown",
        "p0/p0-4-cli",
        "p0/p0-5-collaborate",
        "p0/p0-6-python",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "1.基础篇",
      items: ["p1/p1-1-repl", "p1/p1-2-values-variables", "p1/p1-3-ide"],
      // collapsible: false,
    },
    {
      type: "category",
      label: "2.进阶篇",
      items: ["p2/example"],
      // collapsible: false,
    },
    {
      type: "category",
      label: "3.学习笔记",
      items: ["notes/example"],
      // collapsible: false,
    },
    {
      type: "category",
      label: "测试区",
      items: [
        "test/intro",
        {
          type: "category",
          label: "测试文件夹1",
          items: ["test/test_folder1/file1"],
          collapsible: false,
        },
      ],
    },
    {
      type: "category",
      label: "项目材料",
      items: ["files/qa"],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
