require("dotenv").config();
const axios = require("axios");

const LEETCODE_API_URL = "https://leetcode.com/graphql";

const USER_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        aboutMe
        ranking
        reputation
        userAvatar
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

/**
 * Fetch LeetCode user profile data
 * @param {string} username - LeetCode username
 * @returns {Promise<object>} - User profile data
 */
async function getLeetCodeUser(username) {
  if (!username || typeof username !== "string" || username.trim().length === 0) {
    throw new Error("Invalid username provided.");
  }

  try {
    const response = await axios.post(
      LEETCODE_API_URL,
      { query: USER_QUERY, variables: { username } },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data.errors) {
      throw new Error("User not found or API field mismatch.");
    }

    const userData = response.data.data.matchedUser;
    if (!userData) {
      throw new Error("User profile not found.");
    }

    return {
      username: userData.username,
      realName: userData.profile.realName || "N/A",
      aboutMe: userData.profile.aboutMe || "N/A",
      ranking: userData.profile.ranking || "N/A",
      reputation: userData.profile.reputation || 0,
      avatar: userData.profile.userAvatar || null,
      problemsSolved: userData.submitStats.acSubmissionNum.map(({ difficulty, count }) => ({
        difficulty,
        count,
      })),
    };
  } catch (error) {
    throw new Error(`Error fetching LeetCode data: ${error.message}`);
  }
}

// Export the function as a module
module.exports = { getLeetCodeUser };
