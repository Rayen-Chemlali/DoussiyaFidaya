import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnRdvsConsultationsArgs } from "./args/CreateManyAndReturnRdvsConsultationsArgs";
import { CreateManyAndReturnRdvsDoctorsArgs } from "./args/CreateManyAndReturnRdvsDoctorsArgs";
import { CreateManyAndReturnRdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs } from "./args/CreateManyAndReturnRdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs";
import { Consultations } from "../../models/Consultations";
import { Doctors } from "../../models/Doctors";
import { Patients } from "../../models/Patients";
import { Rdv_requests } from "../../models/Rdv_requests";

@TypeGraphQL.ObjectType("CreateManyAndReturnRdvs", {})
export class CreateManyAndReturnRdvs {
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
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consultation_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_request_id!: string | null;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  consultations!: Consultations | null;
  rdv_requests_rdvs_rdv_request_idTordv_requests!: Rdv_requests | null;
  doctors!: Doctors | null;

  @TypeGraphQL.Field(_type => Consultations, {
    name: "consultations",
    nullable: true
  })
  getConsultations(@TypeGraphQL.Root() root: CreateManyAndReturnRdvs, @TypeGraphQL.Args() args: CreateManyAndReturnRdvsConsultationsArgs): Consultations | null {
    return root.consultations;
  }

  @TypeGraphQL.Field(_type => Rdv_requests, {
    name: "rdv_requests_rdvs_rdv_request_idTordv_requests",
    nullable: true
  })
  getRdv_requests_rdvs_rdv_request_idTordv_requests(@TypeGraphQL.Root() root: CreateManyAndReturnRdvs, @TypeGraphQL.Args() args: CreateManyAndReturnRdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs): Rdv_requests | null {
    return root.rdv_requests_rdvs_rdv_request_idTordv_requests;
  }

  @TypeGraphQL.Field(_type => Doctors, {
    name: "doctors",
    nullable: true
  })
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnRdvs, @TypeGraphQL.Args() args: CreateManyAndReturnRdvsDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
