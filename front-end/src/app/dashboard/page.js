"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/accounts");

      setAccounts(response.data);
    };

    getData();
  }, []);

  const createAccount = async () => {
    const newAccount = {
      amount,
      title,
    };

    const response = await axios.post(
      "http://localhost:3001/accounts",
      newAccount
    );

    setAccounts([...accounts, response.data]);
  };

  return (
    <div>
      <p>hi</p>

      {accounts.map((account) => {
        return (
          <div>
            <p>{account.amount}</p>
            <p>{account.title}</p>
          </div>
        );
      })}

      <div className="flex gap-4 p-6">
        <input
          className="border"
          value={title}
          onClick={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          className="border"
          value={amount}
          onClick={(event) => {
            setAmount(event.target.value);
          }}
        />
        <button onClick={createAccount}>Click</button>
      </div>
    </div>
  );
}
