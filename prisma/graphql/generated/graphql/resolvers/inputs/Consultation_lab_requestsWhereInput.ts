import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsRelationFilter } from "../inputs/ConsultationsRelationFilter";
import { Lab_requestsRelationFilter } from "../inputs/Lab_requestsRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Consultation_lab_requestsWhereInput", {})
export class Consultation_lab_requestsWhereInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereInput], {
    nullable: true
  })
  AND?: Consultation_lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereInput], {
    nullable: true
  })
  OR?: Consultation_lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereInput], {
    nullable: true
  })
  NOT?: Consultation_lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  consultation_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  lab_request_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsRelationFilter, {
    nullable: true
  })
  lab_requests?: Lab_requestsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsRelationFilter | undefined;
}
