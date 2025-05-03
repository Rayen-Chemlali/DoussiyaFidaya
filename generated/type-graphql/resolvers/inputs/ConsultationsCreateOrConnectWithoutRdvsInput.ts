import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutRdvsInput } from "../inputs/ConsultationsCreateWithoutRdvsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutRdvsInput", {})
export class ConsultationsCreateOrConnectWithoutRdvsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutRdvsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutRdvsInput;
}
