const fs = require("fs");
const path = require("path");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");

    const rawData = fs.readFileSync(filePath);

    const accounts = JSON.parse(rawData);

    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal Server Error" });
  }
};

const createAccount = async (req, res) => {
  console.log("ddd", req.body);
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");

    const rawData = fs.readFileSync(filePath);

    const accounts = JSON.parse(rawData);

    const newAccount = req.body;

    accounts.push(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts));

    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal Server Error" });
  }
};

module.exports = { getAllAccounts, createAccount };
