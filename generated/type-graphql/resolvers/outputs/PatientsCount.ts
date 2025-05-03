import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCountAuthorizationsArgs } from "./args/PatientsCountAuthorizationsArgs";
import { PatientsCountCertificatesArgs } from "./args/PatientsCountCertificatesArgs";
import { PatientsCountConsultationsArgs } from "./args/PatientsCountConsultationsArgs";
import { PatientsCountLab_documentsArgs } from "./args/PatientsCountLab_documentsArgs";
import { PatientsCountLab_requestsArgs } from "./args/PatientsCountLab_requestsArgs";
import { PatientsCountPrescriptionsArgs } from "./args/PatientsCountPrescriptionsArgs";
import { PatientsCountRdv_requestsArgs } from "./args/PatientsCountRdv_requestsArgs";
import { PatientsCountRdvsArgs } from "./args/PatientsCountRdvsArgs";

@TypeGraphQL.ObjectType("PatientsCount", {})
export class PatientsCount {
  authorizations!: number;
  certificates!: number;
  consultations!: number;
  lab_documents!: number;
  lab_requests!: number;
  prescriptions!: number;
  rdv_requests!: number;
  rdvs!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "authorizations",
    nullable: false
  })
  getAuthorizations(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountAuthorizationsArgs): number {
    return root.authorizations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "certificates",
    nullable: false
  })
  getCertificates(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountCertificatesArgs): number {
    return root.certificates;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultations",
    nullable: false
  })
  getConsultations(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountConsultationsArgs): number {
    return root.consultations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_documents",
    nullable: false
  })
  getLab_documents(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountLab_documentsArgs): number {
    return root.lab_documents;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_requests",
    nullable: false
  })
  getLab_requests(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountLab_requestsArgs): number {
    return root.lab_requests;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "prescriptions",
    nullable: false
  })
  getPrescriptions(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountPrescriptionsArgs): number {
    return root.prescriptions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rdv_requests",
    nullable: false
  })
  getRdv_requests(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountRdv_requestsArgs): number {
    return root.rdv_requests;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rdvs",
    nullable: false
  })
  getRdvs(@TypeGraphQL.Root() root: PatientsCount, @TypeGraphQL.Args() args: PatientsCountRdvsArgs): number {
    return root.rdvs;
  }
}
