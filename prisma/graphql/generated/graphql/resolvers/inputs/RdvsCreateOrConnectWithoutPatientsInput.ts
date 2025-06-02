import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutPatientsInput } from "../inputs/RdvsCreateWithoutPatientsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateOrConnectWithoutPatientsInput", {})
export class RdvsCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutPatientsInput;
}
