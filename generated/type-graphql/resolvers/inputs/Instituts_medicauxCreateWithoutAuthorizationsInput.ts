import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateNestedManyWithoutInstituts_medicauxInput";
import { DoctorsCreateNestedManyWithoutInstitutsInput } from "../inputs/DoctorsCreateNestedManyWithoutInstitutsInput";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Instituts_medicauxCreateWithoutAuthorizationsInput", {})
export class Instituts_medicauxCreateWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: false
  })
  type!: "CLINIC" | "HOSPITAL" | "LABORATORY";

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedManyWithoutInstituts_medicauxInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedManyWithoutInstituts_medicauxInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedManyWithoutInstitutsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedManyWithoutInstitutsInput | undefined;
}
