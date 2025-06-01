import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput";
import { DoctorsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateNestedManyWithoutInstituts_medicauxInput";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Instituts_medicauxCreateWithoutConsultationsInput", {})
export class Instituts_medicauxCreateWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput, {
    nullable: true
  })
  authorizations?: AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedManyWithoutInstituts_medicauxInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedManyWithoutInstituts_medicauxInput | undefined;
}
