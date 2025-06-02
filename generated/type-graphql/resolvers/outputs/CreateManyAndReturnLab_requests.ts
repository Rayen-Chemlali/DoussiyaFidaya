import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnLab_requestsDoctorsArgs } from "./args/CreateManyAndReturnLab_requestsDoctorsArgs";
import { Doctors } from "../../models/Doctors";
import { Patients } from "../../models/Patients";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnLab_requests", {})
export class CreateManyAndReturnLab_requests {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  priority!: "low" | "medium" | "high" | null;

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
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnLab_requests, @TypeGraphQL.Args() args: CreateManyAndReturnLab_requestsDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
