import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutConsultationsInput } from "../inputs/PatientsCreateWithoutConsultationsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutConsultationsInput", {})
export class PatientsCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutConsultationsInput;
}
