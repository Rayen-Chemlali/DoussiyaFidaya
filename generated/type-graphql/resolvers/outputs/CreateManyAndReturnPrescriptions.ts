import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPrescriptionsDoctorsArgs } from "./args/CreateManyAndReturnPrescriptionsDoctorsArgs";
import { Doctors } from "../../models/Doctors";
import { Patients } from "../../models/Patients";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnPrescriptions", {})
export class CreateManyAndReturnPrescriptions {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_signed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: false
  })
  status!: "ACTIVE" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  doctors!: Doctors | null;

  @TypeGraphQL.Field(_type => Doctors, {
    name: "doctors",
    nullable: true
  })
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnPrescriptions, @TypeGraphQL.Args() args: CreateManyAndReturnPrescriptionsDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
