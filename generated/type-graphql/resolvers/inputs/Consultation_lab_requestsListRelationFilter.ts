import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsWhereInput } from "../inputs/Consultation_lab_requestsWhereInput";

@TypeGraphQL.InputType("Consultation_lab_requestsListRelationFilter", {})
export class Consultation_lab_requestsListRelationFilter {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  every?: Consultation_lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  some?: Consultation_lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  none?: Consultation_lab_requestsWhereInput | undefined;
}
