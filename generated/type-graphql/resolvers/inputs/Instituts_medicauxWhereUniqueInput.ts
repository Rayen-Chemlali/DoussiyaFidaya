import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsListRelationFilter } from "../inputs/AuthorizationsListRelationFilter";
import { ConsultationsListRelationFilter } from "../inputs/ConsultationsListRelationFilter";
import { DoctorsListRelationFilter } from "../inputs/DoctorsListRelationFilter";
import { Enuminstituts_medicaux_type_enumFilter } from "../inputs/Enuminstituts_medicaux_type_enumFilter";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxWhereUniqueInput", {})
export class Instituts_medicauxWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereInput], {
    nullable: true
  })
  AND?: Instituts_medicauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereInput], {
    nullable: true
  })
  OR?: Instituts_medicauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereInput], {
    nullable: true
  })
  NOT?: Instituts_medicauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => Enuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  type?: Enuminstituts_medicaux_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsListRelationFilter, {
    nullable: true
  })
  authorizations?: AuthorizationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsListRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsListRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsListRelationFilter | undefined;
}
