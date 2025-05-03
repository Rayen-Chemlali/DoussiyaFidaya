import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsScalarWhereInput } from "../inputs/PrescriptionsScalarWhereInput";
import { PrescriptionsUpdateManyMutationInput } from "../inputs/PrescriptionsUpdateManyMutationInput";

@TypeGraphQL.InputType("PrescriptionsUpdateManyWithWhereWithoutPatientsInput", {})
export class PrescriptionsUpdateManyWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => PrescriptionsScalarWhereInput, {
    nullable: false
  })
  where!: PrescriptionsScalarWhereInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateManyMutationInput;
}
