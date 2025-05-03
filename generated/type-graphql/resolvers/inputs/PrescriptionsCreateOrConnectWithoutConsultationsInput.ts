import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutConsultationsInput } from "../inputs/PrescriptionsCreateWithoutConsultationsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateOrConnectWithoutConsultationsInput", {})
export class PrescriptionsCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutConsultationsInput;
}
