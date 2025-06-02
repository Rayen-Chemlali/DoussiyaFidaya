import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsUpdateWithoutMedicationsInput } from "../inputs/PrescriptionsUpdateWithoutMedicationsInput";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";

@TypeGraphQL.InputType("PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput", {})
export class PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutMedicationsInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateWithoutMedicationsInput;
}
