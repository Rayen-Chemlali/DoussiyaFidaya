import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultations } from "../models/Consultations";
import { Doctors } from "../models/Doctors";
import { Patients } from "../models/Patients";
import { Rdv_requests } from "../models/Rdv_requests";

@TypeGraphQL.ObjectType("Rdvs", {})
export class Rdvs {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consultation_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_request_id?: string | null;

  rdv_requests_rdv_requests_rdv_idTordvs?: Rdv_requests | null;

  consultations?: Consultations | null;

  patients?: Patients;

  rdv_requests_rdvs_rdv_request_idTordv_requests?: Rdv_requests | null;

  doctors?: Doctors | null;
}
