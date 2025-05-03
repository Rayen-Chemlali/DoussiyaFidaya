import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnCertificatesDoctorsArgs } from "./args/CreateManyAndReturnCertificatesDoctorsArgs";
import { Doctors } from "../../models/Doctors";
import { Patients } from "../../models/Patients";

@TypeGraphQL.ObjectType("CreateManyAndReturnCertificates", {})
export class CreateManyAndReturnCertificates {
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
  start_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

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
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnCertificates, @TypeGraphQL.Args() args: CreateManyAndReturnCertificatesDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
