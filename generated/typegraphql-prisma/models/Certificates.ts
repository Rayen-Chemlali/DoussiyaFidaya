import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctors } from "../models/Doctors";
import { Patients } from "../models/Patients";

@TypeGraphQL.ObjectType("Certificates", {})
export class Certificates {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  doctors?: Doctors | null;

  patients?: Patients;
}
