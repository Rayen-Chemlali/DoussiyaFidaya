import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutRdvsInput } from "../inputs/ConsultationsCreateOrConnectWithoutRdvsInput";
import { ConsultationsCreateWithoutRdvsInput } from "../inputs/ConsultationsCreateWithoutRdvsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedOneWithoutRdvsInput", {})
export class ConsultationsCreateNestedOneWithoutRdvsInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;
}
