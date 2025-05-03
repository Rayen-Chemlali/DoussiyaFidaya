import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsUpdateWithoutDoctorsInput } from "../inputs/PrescriptionsUpdateWithoutDoctorsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateWithoutDoctorsInput;
}
