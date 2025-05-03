import * as TypeGraphQL from "type-graphql";

export enum MedicationsScalarFieldEnum {
  id = "id",
  dosage = "dosage",
  duration = "duration",
  frequency = "frequency",
  name = "name",
  quantity = "quantity",
  prescription_id = "prescription_id"
}
TypeGraphQL.registerEnumType(MedicationsScalarFieldEnum, {
  name: "MedicationsScalarFieldEnum",
  description: undefined,
});
