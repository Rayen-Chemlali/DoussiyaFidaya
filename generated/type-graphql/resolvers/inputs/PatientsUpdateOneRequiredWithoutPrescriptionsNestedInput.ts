import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/PatientsCreateOrConnectWithoutPrescriptionsInput";
import { PatientsCreateWithoutPrescriptionsInput } from "../inputs/PatientsCreateWithoutPrescriptionsInput";
import { PatientsUpdateToOneWithWhereWithoutPrescriptionsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutPrescriptionsInput";
import { PatientsUpsertWithoutPrescriptionsInput } from "../inputs/PatientsUpsertWithoutPrescriptionsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutPrescriptionsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutPrescriptionsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutPrescriptionsInput | undefined;
}
