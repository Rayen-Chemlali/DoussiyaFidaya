import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutMedicationsInput } from "../inputs/PrescriptionsCreateWithoutMedicationsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateOrConnectWithoutMedicationsInput", {})
export class PrescriptionsCreateOrConnectWithoutMedicationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutMedicationsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutMedicationsInput;
}
