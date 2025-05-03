import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutLab_requestsInput } from "../inputs/PatientsCreateWithoutLab_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutLab_requestsInput", {})
export class PatientsCreateOrConnectWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutLab_requestsInput;
}
