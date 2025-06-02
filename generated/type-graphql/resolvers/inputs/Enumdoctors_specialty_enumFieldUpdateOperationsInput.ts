import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";

@TypeGraphQL.InputType("Enumdoctors_specialty_enumFieldUpdateOperationsInput", {})
export class Enumdoctors_specialty_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: true
  })
  set?: "generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre" | undefined;
}
