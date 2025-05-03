import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Patients } from "../../models/Patients";

@TypeGraphQL.ObjectType("CreateManyAndReturnGeneralMedicalRecords", {})
export class CreateManyAndReturnGeneralMedicalRecords {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  allergies!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bloodType!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients_GeneralMedicalRecords_patient_idTopatients!: Patients;
}
