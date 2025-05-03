import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutConsultationsInput } from "../inputs/PatientsCreateOrConnectWithoutConsultationsInput";
import { PatientsCreateWithoutConsultationsInput } from "../inputs/PatientsCreateWithoutConsultationsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutConsultationsInput", {})
export class PatientsCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
