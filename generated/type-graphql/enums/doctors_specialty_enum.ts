import * as TypeGraphQL from "type-graphql";

export enum doctors_specialty_enum {
  generaliste = "generaliste",
  cardiologue = "cardiologue",
  dermatologue = "dermatologue",
  gynecologue = "gynecologue",
  pediatre = "pediatre",
  orthopediste = "orthopediste",
  psychiatre = "psychiatre",
  ophtalmologue = "ophtalmologue",
  otorhinolaryngologue = "otorhinolaryngologue",
  neurologue = "neurologue",
  urologue = "urologue",
  endocrinologue = "endocrinologue",
  gastroenterologue = "gastroenterologue",
  rheumatologue = "rheumatologue",
  anesthesiste = "anesthesiste",
  radiologue = "radiologue",
  oncologue = "oncologue",
  chirurgien = "chirurgien",
  nutritionniste = "nutritionniste",
  physiotherapeute = "physiotherapeute",
  psychologue = "psychologue",
  sexologue = "sexologue",
  geriatre = "geriatre",
  allergologue = "allergologue",
  hematologue = "hematologue",
  nephrologue = "nephrologue",
  pneumologue = "pneumologue",
  dentiste = "dentiste",
  orthodontiste = "orthodontiste",
  autre = "autre"
}
TypeGraphQL.registerEnumType(doctors_specialty_enum, {
  name: "doctors_specialty_enum",
  description: undefined,
});
