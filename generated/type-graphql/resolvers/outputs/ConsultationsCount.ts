import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCountConsultation_lab_requestsArgs } from "./args/ConsultationsCountConsultation_lab_requestsArgs";

@TypeGraphQL.ObjectType("ConsultationsCount", {})
export class ConsultationsCount {
  consultation_lab_requests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultation_lab_requests",
    nullable: false
  })
  getConsultation_lab_requests(@TypeGraphQL.Root() root: ConsultationsCount, @TypeGraphQL.Args() args: ConsultationsCountConsultation_lab_requestsArgs): number {
    return root.consultation_lab_requests;
  }
}
