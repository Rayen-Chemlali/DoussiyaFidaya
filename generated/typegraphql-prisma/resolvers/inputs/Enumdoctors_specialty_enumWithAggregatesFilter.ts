import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumdoctors_specialty_enumFilter } from "../inputs/NestedEnumdoctors_specialty_enumFilter";
import { NestedEnumdoctors_specialty_enumWithAggregatesFilter } from "../inputs/NestedEnumdoctors_specialty_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";

@TypeGraphQL.InputType("Enumdoctors_specialty_enumWithAggregatesFilter", {})
export class Enumdoctors_specialty_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: true
  })
  equals?: "generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre" | undefined;

  @TypeGraphQL.Field(_type => [doctors_specialty_enum], {
    nullable: true
  })
  in?: Array<"generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre"> | undefined;

  @TypeGraphQL.Field(_type => [doctors_specialty_enum], {
    nullable: true
  })
  notIn?: Array<"generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_specialty_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumdoctors_specialty_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_specialty_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumdoctors_specialty_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_specialty_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumdoctors_specialty_enumFilter | undefined;
}
