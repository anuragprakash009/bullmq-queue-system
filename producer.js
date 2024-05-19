const { Queue } = require("bullmq");
const { connection } = require("./redis-con");

const myQueue = new Queue("newQueue19", { connection });

async function addData(data) {
  await myQueue.add("paint", { color: data });
}

module.exports = {
  addData,
};
