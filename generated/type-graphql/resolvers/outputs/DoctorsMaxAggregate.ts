import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.ObjectType("DoctorsMaxAggregate", {})
export class DoctorsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: true
  })
  type!: "GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON" | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_license_verified!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image!: string | null;

  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: true
  })
  specialty!: "GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;
}
