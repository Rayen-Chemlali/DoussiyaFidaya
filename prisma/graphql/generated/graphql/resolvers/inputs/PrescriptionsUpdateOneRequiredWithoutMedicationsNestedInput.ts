import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateOrConnectWithoutMedicationsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutMedicationsInput";
import { PrescriptionsCreateWithoutMedicationsInput } from "../inputs/PrescriptionsCreateWithoutMedicationsInput";
import { PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput } from "../inputs/PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput";
import { PrescriptionsUpsertWithoutMedicationsInput } from "../inputs/PrescriptionsUpsertWithoutMedicationsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateOneRequiredWithoutMedicationsNestedInput", {})
export class PrescriptionsUpdateOneRequiredWithoutMedicationsNestedInput {
  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutMedicationsInput, {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutMedicationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateOrConnectWithoutMedicationsInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutMedicationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpsertWithoutMedicationsInput, {
    nullable: true
  })
  upsert?: PrescriptionsUpsertWithoutMedicationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput, {
    nullable: true
  })
  update?: PrescriptionsUpdateToOneWithWhereWithoutMedicationsInput | undefined;
}
