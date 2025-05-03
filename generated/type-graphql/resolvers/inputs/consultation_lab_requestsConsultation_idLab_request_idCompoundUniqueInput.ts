import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput", {})
export class consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultation_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_request_id!: string;
}
