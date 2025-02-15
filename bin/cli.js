const { getLeetCodeUser } = require("../index");

const username = process.argv[2];

if (!username) {
  console.error("Usage: leetcode-user <username>");
  process.exit(1);
}

getLeetCodeUser(username)
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error(error.message));
