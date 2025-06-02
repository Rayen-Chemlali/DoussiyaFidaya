import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyPatientsInput } from "../inputs/AuthorizationsCreateManyPatientsInput";

@TypeGraphQL.InputType("AuthorizationsCreateManyPatientsInputEnvelope", {})
export class AuthorizationsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateManyPatientsInput], {
    nullable: false
  })
  data!: AuthorizationsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
