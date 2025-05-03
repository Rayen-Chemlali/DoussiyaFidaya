import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Consultation_lab_requestsScalarWhereWithAggregatesInput", {})
export class Consultation_lab_requestsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Consultation_lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Consultation_lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Consultation_lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  consultation_id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  lab_request_id?: UuidWithAggregatesFilter | undefined;
}
