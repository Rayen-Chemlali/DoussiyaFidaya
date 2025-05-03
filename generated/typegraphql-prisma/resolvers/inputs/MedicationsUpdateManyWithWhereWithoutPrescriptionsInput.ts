import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsScalarWhereInput } from "../inputs/MedicationsScalarWhereInput";
import { MedicationsUpdateManyMutationInput } from "../inputs/MedicationsUpdateManyMutationInput";

@TypeGraphQL.InputType("MedicationsUpdateManyWithWhereWithoutPrescriptionsInput", {})
export class MedicationsUpdateManyWithWhereWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => MedicationsScalarWhereInput, {
    nullable: false
  })
  where!: MedicationsScalarWhereInput;

  @TypeGraphQL.Field(_type => MedicationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MedicationsUpdateManyMutationInput;
}
