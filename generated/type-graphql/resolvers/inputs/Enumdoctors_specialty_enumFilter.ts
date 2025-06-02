import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumdoctors_specialty_enumFilter } from "../inputs/NestedEnumdoctors_specialty_enumFilter";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";

@TypeGraphQL.InputType("Enumdoctors_specialty_enumFilter", {})
export class Enumdoctors_specialty_enumFilter {
  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: true
  })
  equals?: "GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST" | undefined;

  @TypeGraphQL.Field(_type => [doctors_specialty_enum], {
    nullable: true
  })
  in?: Array<"GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST"> | undefined;

  @TypeGraphQL.Field(_type => [doctors_specialty_enum], {
    nullable: true
  })
  notIn?: Array<"GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_specialty_enumFilter, {
    nullable: true
  })
  not?: NestedEnumdoctors_specialty_enumFilter | undefined;
}
