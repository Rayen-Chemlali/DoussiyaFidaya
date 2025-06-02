import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsCreateWithoutPrescriptionsInput } from "../inputs/MedicationsCreateWithoutPrescriptionsInput";
import { MedicationsUpdateWithoutPrescriptionsInput } from "../inputs/MedicationsUpdateWithoutPrescriptionsInput";
import { MedicationsWhereUniqueInput } from "../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.InputType("MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput", {})
export class MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: false
  })
  where!: MedicationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MedicationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  update!: MedicationsUpdateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => MedicationsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: MedicationsCreateWithoutPrescriptionsInput;
}
