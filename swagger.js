const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My Student API",
    description: "An API that shows students data.",
  },
  host: "final-stretch-goal.onrender.com",
  schemes: ["https"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

//Run to
swaggerAutogen(outputfile, endpointFiles, doc);

//Generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./server.js");
});
