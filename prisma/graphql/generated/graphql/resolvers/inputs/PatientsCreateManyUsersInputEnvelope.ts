import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateManyUsersInput } from "../inputs/PatientsCreateManyUsersInput";

@TypeGraphQL.InputType("PatientsCreateManyUsersInputEnvelope", {})
export class PatientsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [PatientsCreateManyUsersInput], {
    nullable: false
  })
  data!: PatientsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
