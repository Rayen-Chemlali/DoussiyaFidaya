import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutRdv_requestsInput } from "../inputs/PatientsCreateWithoutRdv_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutRdv_requestsInput", {})
export class PatientsCreateOrConnectWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdv_requestsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutRdv_requestsInput;
}
