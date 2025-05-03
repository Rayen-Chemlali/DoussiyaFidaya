import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsWhereInput } from "../inputs/Consultation_lab_requestsWhereInput";
import { ConsultationsRelationFilter } from "../inputs/ConsultationsRelationFilter";
import { Lab_requestsRelationFilter } from "../inputs/Lab_requestsRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput } from "../inputs/consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsWhereUniqueInput", {})
export class Consultation_lab_requestsWhereUniqueInput {
  @TypeGraphQL.Field(_type => consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput, {
    nullable: true
  })
  consultation_id_lab_request_id?: consultation_lab_requestsConsultation_idLab_request_idCompoundUniqueInput | undefined;

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
