import crypto, { RandomUUIDOptions } from "crypto";
import moment from "moment";
import { query } from "@lib/db"

type User = {
  id: string;
  createdAt: string;
  email: string;
  password: string;
  hash: string;
  salt: string;
}

export function createUser({ email, password }: User) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');

  const user: Omit<User, "password"> = {
    id: crypto.randomUUID(),
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    email,
    hash,
    salt
  }

  try {
    const result = query('INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)',
      [user.id, user.createdAt.toString(), user.email, user.hash, user.salt]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  return user;
}

export function findUser({ email }: Pick<User, "email">) {
  try {
    return query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
  } catch (e) {
    console.log(e);
  }
}