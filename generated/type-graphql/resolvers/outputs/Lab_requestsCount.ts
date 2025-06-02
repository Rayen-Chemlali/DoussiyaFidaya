import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCountConsultation_lab_requestsArgs } from "./args/Lab_requestsCountConsultation_lab_requestsArgs";
import { Lab_requestsCountConsultationsArgs } from "./args/Lab_requestsCountConsultationsArgs";
import { Lab_requestsCountLab_documentsArgs } from "./args/Lab_requestsCountLab_documentsArgs";

@TypeGraphQL.ObjectType("Lab_requestsCount", {})
export class Lab_requestsCount {
  consultation_lab_requests!: number;
  lab_documents!: number;
  consultations!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultation_lab_requests",
    nullable: false
  })
  getConsultation_lab_requests(@TypeGraphQL.Root() root: Lab_requestsCount, @TypeGraphQL.Args() args: Lab_requestsCountConsultation_lab_requestsArgs): number {
    return root.consultation_lab_requests;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_documents",
    nullable: false
  })
  getLab_documents(@TypeGraphQL.Root() root: Lab_requestsCount, @TypeGraphQL.Args() args: Lab_requestsCountLab_documentsArgs): number {
    return root.lab_documents;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultations",
    nullable: false
  })
  getConsultations(@TypeGraphQL.Root() root: Lab_requestsCount, @TypeGraphQL.Args() args: Lab_requestsCountConsultationsArgs): number {
    return root.consultations;
  }
}
