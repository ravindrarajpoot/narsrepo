// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Member } from "../models/memberModels";
import { MemberCreationParams, MembersService } from "../services/memberService";


@Route("members")
export class MembersController extends Controller {
  
  @Get("{memberId}")
  public async getMember(
    @Path() memberId: number,
    @Query() name?: string
  ): Promise<Member> {
    return new MembersService().get(memberId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post("create")
  public async createMember(
    @Body() requestBody: MemberCreationParams
  ): Promise<Member> {
    this.setStatus(201); // set return status 201
    return new MembersService().create(requestBody);
  }
}