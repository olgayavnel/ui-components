module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create component and its stories",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "input",
        name: "imageUrl",
        message:
          "What is the Figma or image url for this component? (Optional)",
      },
      {
        type: "input",
        name: "imageType",
        message:
          "What type of image did you add above? Valid options: figma, image (Optional)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/stories.hbs",
      },
    ],
  });
};
