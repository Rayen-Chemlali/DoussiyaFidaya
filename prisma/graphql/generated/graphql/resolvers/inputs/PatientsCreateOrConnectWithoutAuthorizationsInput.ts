import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutAuthorizationsInput } from "../inputs/PatientsCreateWithoutAuthorizationsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutAuthorizationsInput", {})
export class PatientsCreateOrConnectWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutAuthorizationsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutAuthorizationsInput;
}
