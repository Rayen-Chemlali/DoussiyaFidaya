import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsUpdateWithoutPatientsInput } from "../inputs/PrescriptionsUpdateWithoutPatientsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput", {})
export class PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateWithoutPatientsInput;
}
