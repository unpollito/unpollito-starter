import { User } from "@unpollito/types";
import * as db from "zapatos/db";
import { getDbPool } from "../db/db_pool";

const createUser = async (user: User): Promise<void> => {
  await db.insert("users", user).run(getDbPool());
};

const getUserByEmail = async (email: string): Promise<User | undefined> => {
  const user = await db.selectOne("users", { email }).run(getDbPool());
  return user ?? undefined;
};

const getUserById = async (id: string): Promise<User | undefined> => {
  const user = await db.selectOne("users", { id }).run(getDbPool());
  return user ?? undefined;
};

const updateUser = async (user: User): Promise<void> => {
  await db
    .update("users", { email: user.email }, { id: user.id })
    .run(getDbPool());
};

export const userApi = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
};
