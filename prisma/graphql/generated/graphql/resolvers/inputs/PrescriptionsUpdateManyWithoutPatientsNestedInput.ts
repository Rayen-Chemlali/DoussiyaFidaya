import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyPatientsInputEnvelope } from "../inputs/PrescriptionsCreateManyPatientsInputEnvelope";
import { PrescriptionsCreateOrConnectWithoutPatientsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutPatientsInput";
import { PrescriptionsCreateWithoutPatientsInput } from "../inputs/PrescriptionsCreateWithoutPatientsInput";
import { PrescriptionsScalarWhereInput } from "../inputs/PrescriptionsScalarWhereInput";
import { PrescriptionsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/PrescriptionsUpdateManyWithWhereWithoutPatientsInput";
import { PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput";
import { PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateManyWithoutPatientsNestedInput", {})
export class PrescriptionsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: PrescriptionsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  set?: PrescriptionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PrescriptionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  delete?: PrescriptionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: PrescriptionsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: PrescriptionsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PrescriptionsScalarWhereInput[] | undefined;
}
