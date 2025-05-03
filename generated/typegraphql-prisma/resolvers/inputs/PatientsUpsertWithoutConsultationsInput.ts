import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutConsultationsInput } from "../inputs/PatientsCreateWithoutConsultationsInput";
import { PatientsUpdateWithoutConsultationsInput } from "../inputs/PatientsUpdateWithoutConsultationsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutConsultationsInput", {})
export class PatientsUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
