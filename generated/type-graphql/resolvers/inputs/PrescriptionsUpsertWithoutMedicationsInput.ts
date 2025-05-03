import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutMedicationsInput } from "../inputs/PrescriptionsCreateWithoutMedicationsInput";
import { PrescriptionsUpdateWithoutMedicationsInput } from "../inputs/PrescriptionsUpdateWithoutMedicationsInput";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";

@TypeGraphQL.InputType("PrescriptionsUpsertWithoutMedicationsInput", {})
export class PrescriptionsUpsertWithoutMedicationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutMedicationsInput, {
    nullable: false
  })
  update!: PrescriptionsUpdateWithoutMedicationsInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutMedicationsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutMedicationsInput;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;
}
