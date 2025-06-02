import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsScalarWhereInput } from "../inputs/PatientsScalarWhereInput";
import { PatientsUpdateManyMutationInput } from "../inputs/PatientsUpdateManyMutationInput";

@TypeGraphQL.InputType("PatientsUpdateManyWithWhereWithoutUsersInput", {})
export class PatientsUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsScalarWhereInput, {
    nullable: false
  })
  where!: PatientsScalarWhereInput;

  @TypeGraphQL.Field(_type => PatientsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientsUpdateManyMutationInput;
}
