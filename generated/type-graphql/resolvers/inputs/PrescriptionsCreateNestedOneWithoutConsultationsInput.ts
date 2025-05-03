import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateOrConnectWithoutConsultationsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutConsultationsInput";
import { PrescriptionsCreateWithoutConsultationsInput } from "../inputs/PrescriptionsCreateWithoutConsultationsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateNestedOneWithoutConsultationsInput", {})
export class PrescriptionsCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput | undefined;
}
