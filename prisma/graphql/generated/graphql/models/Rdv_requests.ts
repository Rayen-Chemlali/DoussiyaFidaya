import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctors } from "../models/Doctors";
import { Patients } from "../models/Patients";
import { Rdvs } from "../models/Rdvs";

@TypeGraphQL.ObjectType("Rdv_requests", {})
export class Rdv_requests {
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
  Motif!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Status!: string;

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
  rdv_id?: string | null;

  rdvs_rdv_requests_rdv_idTordvs?: Rdvs | null;

  patients?: Patients;

  doctors?: Doctors | null;

  rdvs_rdvs_rdv_request_idTordv_requests?: Rdvs | null;
}
