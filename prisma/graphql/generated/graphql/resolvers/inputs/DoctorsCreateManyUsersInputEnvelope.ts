import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateManyUsersInput } from "../inputs/DoctorsCreateManyUsersInput";

@TypeGraphQL.InputType("DoctorsCreateManyUsersInputEnvelope", {})
export class DoctorsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [DoctorsCreateManyUsersInput], {
    nullable: false
  })
  data!: DoctorsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
