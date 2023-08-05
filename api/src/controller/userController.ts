import { NextFunction, Request, Response } from "express";
const fs = require("fs");
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  avatar: string;
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, avatar, id } = req.body as User;
    if (!name || !email || !avatar) {
      return res
        .status(400)
        .json({ error: "Name, email and avatar are required." });
    }
    const userData: User = {
      name,
      id,
      email,
      age,
      avatar,
    };
    fs.readFile("users.json", "utf8", (err: Error, data: any) => {
      if (err) {
        return res.status(500).json({ error: "Failed" });
      }

      let users: User[] = [];
      if (data) {
        users = JSON.parse(data) as User[];
      }

      users.push(userData);

      fs.writeFile("../../data/1.json", JSON.stringify(users), (err: Error) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write users file." });
        }

        return res.status(201).json({ message: "User created successfully." });
      });
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "error occurred",
    });
  }
};
export const getAllUSers = async (req: Request, res: Response) => {
  try {
    fs.readFile("../../data/1.json", "utf8", (err: Error, data: any) => {
      if (err) {
        return res.status(500).json({ error: "Failed" });
      }

      const users: User[] = data ? (JSON.parse(data) as User[]) : [];
      return res.status(200).json(users);
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "error occurred",
    });
  }
};
export const GetUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;

    fs.readFile("../../data/1.json", "utf8", (err: Error, data: any) => {
      if (err) {
        return res.status(500).json({ error: "Failed " });
      }

      const users: User[] = data ? (JSON.parse(data) as User[]) : [];
      const user = users.find((user) => user.id === userId);

      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "error occurred",
    });
  }
};
