import { Request } from "express";
import { TUser } from "./user";
import { TBlog } from "./blog";

export type TRequestCustomType = Request & {
  type?: string;
};
