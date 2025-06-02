import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsUpdateWithoutPatientsInput } from "../inputs/RdvsUpdateWithoutPatientsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateWithWhereUniqueWithoutPatientsInput", {})
export class RdvsUpdateWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: RdvsUpdateWithoutPatientsInput;
}
