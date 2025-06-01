import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCountCertificatesArgs } from "./args/DoctorsCountCertificatesArgs";
import { DoctorsCountConsultationsArgs } from "./args/DoctorsCountConsultationsArgs";
import { DoctorsCountInstituts_medicauxArgs } from "./args/DoctorsCountInstituts_medicauxArgs";
import { DoctorsCountLab_requestsArgs } from "./args/DoctorsCountLab_requestsArgs";
import { DoctorsCountPrescriptionsArgs } from "./args/DoctorsCountPrescriptionsArgs";
import { DoctorsCountRdv_requestsArgs } from "./args/DoctorsCountRdv_requestsArgs";
import { DoctorsCountRdvsArgs } from "./args/DoctorsCountRdvsArgs";

@TypeGraphQL.ObjectType("DoctorsCount", {})
export class DoctorsCount {
  certificates!: number;
  consultations!: number;
  instituts_medicaux!: number;
  lab_requests!: number;
  prescriptions!: number;
  rdv_requests!: number;
  rdvs!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "certificates",
    nullable: false
  })
  getCertificates(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountCertificatesArgs): number {
    return root.certificates;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultations",
    nullable: false
  })
  getConsultations(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountConsultationsArgs): number {
    return root.consultations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "instituts_medicaux",
    nullable: false
  })
  getInstituts_medicaux(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountInstituts_medicauxArgs): number {
    return root.instituts_medicaux;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_requests",
    nullable: false
  })
  getLab_requests(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountLab_requestsArgs): number {
    return root.lab_requests;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "prescriptions",
    nullable: false
  })
  getPrescriptions(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountPrescriptionsArgs): number {
    return root.prescriptions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rdv_requests",
    nullable: false
  })
  getRdv_requests(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountRdv_requestsArgs): number {
    return root.rdv_requests;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rdvs",
    nullable: false
  })
  getRdvs(@TypeGraphQL.Root() root: DoctorsCount, @TypeGraphQL.Args() args: DoctorsCountRdvsArgs): number {
    return root.rdvs;
  }
}
