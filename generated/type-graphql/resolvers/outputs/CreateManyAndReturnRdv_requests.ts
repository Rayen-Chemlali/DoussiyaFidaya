import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnRdv_requestsDoctorsArgs } from "./args/CreateManyAndReturnRdv_requestsDoctorsArgs";
import { CreateManyAndReturnRdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs } from "./args/CreateManyAndReturnRdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs";
import { Doctors } from "../../models/Doctors";
import { Patients } from "../../models/Patients";
import { Rdvs } from "../../models/Rdvs";

@TypeGraphQL.ObjectType("CreateManyAndReturnRdv_requests", {})
export class CreateManyAndReturnRdv_requests {
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
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_id!: string | null;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  rdvs_rdv_requests_rdv_idTordvs!: Rdvs | null;
  doctors!: Doctors | null;

  @TypeGraphQL.Field(_type => Rdvs, {
    name: "rdvs_rdv_requests_rdv_idTordvs",
    nullable: true
  })
  getRdvs_rdv_requests_rdv_idTordvs(@TypeGraphQL.Root() root: CreateManyAndReturnRdv_requests, @TypeGraphQL.Args() args: CreateManyAndReturnRdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs): Rdvs | null {
    return root.rdvs_rdv_requests_rdv_idTordvs;
  }

  @TypeGraphQL.Field(_type => Doctors, {
    name: "doctors",
    nullable: true
  })
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnRdv_requests, @TypeGraphQL.Args() args: CreateManyAndReturnRdv_requestsDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
