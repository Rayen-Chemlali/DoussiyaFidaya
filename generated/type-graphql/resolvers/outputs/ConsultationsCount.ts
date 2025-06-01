import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCountLab_requestsArgs } from "./args/ConsultationsCountLab_requestsArgs";

@TypeGraphQL.ObjectType("ConsultationsCount", {})
export class ConsultationsCount {
  lab_requests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_requests",
    nullable: false
  })
  getLab_requests(@TypeGraphQL.Root() root: ConsultationsCount, @TypeGraphQL.Args() args: ConsultationsCountLab_requestsArgs): number {
    return root.lab_requests;
  }
}
