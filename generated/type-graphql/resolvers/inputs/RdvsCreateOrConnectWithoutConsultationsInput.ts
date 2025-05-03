import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutConsultationsInput } from "../inputs/RdvsCreateWithoutConsultationsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateOrConnectWithoutConsultationsInput", {})
export class RdvsCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutConsultationsInput;
}
