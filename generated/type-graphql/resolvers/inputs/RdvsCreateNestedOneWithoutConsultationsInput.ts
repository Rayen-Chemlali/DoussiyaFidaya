import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutConsultationsInput } from "../inputs/RdvsCreateOrConnectWithoutConsultationsInput";
import { RdvsCreateWithoutConsultationsInput } from "../inputs/RdvsCreateWithoutConsultationsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateNestedOneWithoutConsultationsInput", {})
export class RdvsCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput | undefined;
}
