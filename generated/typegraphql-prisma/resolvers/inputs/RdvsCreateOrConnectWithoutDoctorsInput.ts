import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutDoctorsInput } from "../inputs/RdvsCreateWithoutDoctorsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateOrConnectWithoutDoctorsInput", {})
export class RdvsCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutDoctorsInput;
}
