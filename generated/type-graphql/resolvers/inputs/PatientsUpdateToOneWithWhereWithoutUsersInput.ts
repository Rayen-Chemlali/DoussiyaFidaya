import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutUsersInput } from "../inputs/PatientsUpdateWithoutUsersInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutUsersInput", {})
export class PatientsUpdateToOneWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutUsersInput;
}
