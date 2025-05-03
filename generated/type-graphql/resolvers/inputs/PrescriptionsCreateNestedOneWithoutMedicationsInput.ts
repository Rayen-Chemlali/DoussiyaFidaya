import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateOrConnectWithoutMedicationsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutMedicationsInput";
import { PrescriptionsCreateWithoutMedicationsInput } from "../inputs/PrescriptionsCreateWithoutMedicationsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateNestedOneWithoutMedicationsInput", {})
export class PrescriptionsCreateNestedOneWithoutMedicationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutMedicationsInput, {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutMedicationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateOrConnectWithoutMedicationsInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutMedicationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput | undefined;
}
