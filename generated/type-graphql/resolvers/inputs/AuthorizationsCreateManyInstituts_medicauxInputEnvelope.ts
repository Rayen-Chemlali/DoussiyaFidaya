import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyInstituts_medicauxInput } from "../inputs/AuthorizationsCreateManyInstituts_medicauxInput";

@TypeGraphQL.InputType("AuthorizationsCreateManyInstituts_medicauxInputEnvelope", {})
export class AuthorizationsCreateManyInstituts_medicauxInputEnvelope {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateManyInstituts_medicauxInput], {
    nullable: false
  })
  data!: AuthorizationsCreateManyInstituts_medicauxInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
