import { execute } from "../services/mysql.connector";
import { userQueries } from "./user.queries";
import User from "./user.model";
import { OkPacket } from "mysql";

export async function getAllUsers() {
    return execute<User[]>(userQueries.getAllUsers,[]);
}

export async function getUserById(userid: number) {
    return execute<User>(userQueries.getUserById,[userid]);
}

export async function createUser(user: User) {
    return execute<OkPacket>(userQueries.createUser, [user.username, user.password]);
}