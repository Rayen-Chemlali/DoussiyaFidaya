import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Users } from "../../models/Users";

@TypeGraphQL.ObjectType("CreateManyAndReturnVerification_tokens", {})
export class CreateManyAndReturnVerification_tokens {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberofTries!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expireAt!: Date;

  @TypeGraphQL.Field(_type => Users, {
    nullable: false
  })
  user!: Users;
}
