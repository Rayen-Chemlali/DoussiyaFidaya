import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsOrderByWithRelationInput } from "../inputs/ConsultationsOrderByWithRelationInput";
import { Lab_requestsOrderByWithRelationInput } from "../inputs/Lab_requestsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Consultation_lab_requestsOrderByWithRelationInput", {})
export class Consultation_lab_requestsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  consultation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lab_request_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsOrderByWithRelationInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByWithRelationInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByWithRelationInput | undefined;
}
