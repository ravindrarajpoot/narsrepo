// src/users/usersService.ts
import { Member } from "../models/memberModels";


// A post request should not contain an id.
export type MemberCreationParams = Pick<Member, "email" | "name" | "phoneNumbers">;

export class MembersService {
  public get(id: number, name?: string): Member {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(memberCreationParams: MemberCreationParams): Member {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...memberCreationParams,
    };
  }
}