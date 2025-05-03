import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutConsultationsInput } from "../inputs/PatientsUpdateWithoutConsultationsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutConsultationsInput", {})
export class PatientsUpdateToOneWithWhereWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutConsultationsInput;
}
