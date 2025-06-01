import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput";
import { ConsultationsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateNestedManyWithoutInstituts_medicauxInput";
import { DoctorsCreateNestedManyWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateNestedManyWithoutInstituts_medicauxInput";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Instituts_medicauxCreateInput", {})
export class Instituts_medicauxCreateInput {
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

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedManyWithoutInstituts_medicauxInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedManyWithoutInstituts_medicauxInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedManyWithoutInstituts_medicauxInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedManyWithoutInstituts_medicauxInput | undefined;
}
