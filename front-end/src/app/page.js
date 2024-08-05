"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/");

        const data = await res.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="p-4">
        <p>hello</p>
        {data.map((item) => (
          <div>
            <p>{item.title}</p>
          </div>
        ))}
        <Button className="bg-green-400 rounded-xl">Click me</Button>
        <Button>Click</Button>
      </div>
    </>
  );
}
