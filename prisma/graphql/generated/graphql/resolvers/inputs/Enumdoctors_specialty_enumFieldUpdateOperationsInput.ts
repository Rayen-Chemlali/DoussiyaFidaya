import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";

@TypeGraphQL.InputType("Enumdoctors_specialty_enumFieldUpdateOperationsInput", {})
export class Enumdoctors_specialty_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: true
  })
  set?: "GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST" | undefined;
}
