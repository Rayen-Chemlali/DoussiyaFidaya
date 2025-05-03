import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsUpdateWithoutPrescriptionsInput } from "../inputs/MedicationsUpdateWithoutPrescriptionsInput";
import { MedicationsWhereUniqueInput } from "../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.InputType("MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput", {})
export class MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: false
  })
  where!: MedicationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MedicationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  data!: MedicationsUpdateWithoutPrescriptionsInput;
}
