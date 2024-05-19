const { Worker } = require("bullmq");
const { connection } = require("./redis-con");

const worker = new Worker(
  "newQueue19",
  async (job) => {
    // Do something with job
    console.log(job);
  },
  { connection }
);
