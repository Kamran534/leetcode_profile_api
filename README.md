# 🚀 LeetCode User API - NPM Package

[![NPM Version](https://img.shields.io/npm/v/leetcode-user-api.svg)](https://www.npmjs.com/package/leetcode-user-api)
[![License](https://img.shields.io/npm/l/leetcode-user-api.svg)](https://github.com/yourusername/leetcode-user-api/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/leetcode-user-api.svg)](https://www.npmjs.com/package/leetcode-user-api)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/yourusername/leetcode-user-api/issues)

🔍 Fetch LeetCode user profile data using an easy-to-use **Node.js package** & **CLI tool**. Perfect for integrating LeetCode stats into your **projects, bots, or dashboards**! 📊

---

## 🌟 Features

✅ Fetch user **profile details** from LeetCode  
✅ Get **ranking, reputation, solved problems**, and **avatar**  
✅ **CLI support** for quick terminal access  
✅ **Zero configuration** – Just install & use  
✅ **Error handling** for smooth API usage  

---

## 🚀 Installation

### **Install as a Node.js Package**
```sh
npm install leetcode-user-api
```

### **Install as a Global CLI**
```sh
npm install -g leetcode-user-api
```

---

## 🔥 Usage

### **1️⃣ Import & Use in JavaScript**
```javascript
const { getLeetCodeUser } = require("leetcode-user-api");

getLeetCodeUser("kamran534055")
  .then(console.log)
  .catch(console.error);
```

### **2️⃣ Use as CLI**
```sh
leetcode-user kamran534055
```

✅ Output:
```kamran534055
{
  "username": "kamran534055",
  "realName": "Muhammad Kamran",
  "aboutMe": "N/A",
  "ranking": 2079378,
  "reputation": 0,
  "avatar": "https://assets.leetcode.com/users/kamran534055/avatar_1739624955.png",
  "problemsSolved": [
    {
      "difficulty": "All",
      "count": 40
    },
    {
      "difficulty": "Easy",
      "count": 21
    },
    {
      "difficulty": "Medium",
      "count": 18
    },
    {
      "difficulty": "Hard",
      "count": 1
    }
  ]
}
```

## 🛠 Error Handling

| **Error** | **Description** |
|-----------|---------------|
| \`Invalid username provided.\` | The username is missing or incorrect. |
| \`User not found.\` | The user does not exist on LeetCode. |
| \`Error fetching LeetCode data.\` | API request failed due to network issues. |

---

## 💖 Support & Contact

If you find this project helpful, please ⭐ **star the repo** and share it!  
For any issues or feature requests, [open an issue](https://github.com/Kamran534/leetcode_profile_api?tab=readme-ov-file). 🚀

💻 **Developed by [Muhammad Kamran](https://github.com/kamran534055)**
