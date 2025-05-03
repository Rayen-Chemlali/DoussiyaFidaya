import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsCreateManyPrescriptionsInputEnvelope } from "../inputs/MedicationsCreateManyPrescriptionsInputEnvelope";
import { MedicationsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/MedicationsCreateOrConnectWithoutPrescriptionsInput";
import { MedicationsCreateWithoutPrescriptionsInput } from "../inputs/MedicationsCreateWithoutPrescriptionsInput";
import { MedicationsScalarWhereInput } from "../inputs/MedicationsScalarWhereInput";
import { MedicationsUpdateManyWithWhereWithoutPrescriptionsInput } from "../inputs/MedicationsUpdateManyWithWhereWithoutPrescriptionsInput";
import { MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput } from "../inputs/MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput";
import { MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput } from "../inputs/MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput";
import { MedicationsWhereUniqueInput } from "../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.InputType("MedicationsUpdateManyWithoutPrescriptionsNestedInput", {})
export class MedicationsUpdateManyWithoutPrescriptionsNestedInput {
  @TypeGraphQL.Field(_type => [MedicationsCreateWithoutPrescriptionsInput], {
    nullable: true
  })
  create?: MedicationsCreateWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsCreateOrConnectWithoutPrescriptionsInput], {
    nullable: true
  })
  connectOrCreate?: MedicationsCreateOrConnectWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput], {
    nullable: true
  })
  upsert?: MedicationsUpsertWithWhereUniqueWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => MedicationsCreateManyPrescriptionsInputEnvelope, {
    nullable: true
  })
  createMany?: MedicationsCreateManyPrescriptionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereUniqueInput], {
    nullable: true
  })
  set?: MedicationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MedicationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereUniqueInput], {
    nullable: true
  })
  delete?: MedicationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereUniqueInput], {
    nullable: true
  })
  connect?: MedicationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput], {
    nullable: true
  })
  update?: MedicationsUpdateWithWhereUniqueWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsUpdateManyWithWhereWithoutPrescriptionsInput], {
    nullable: true
  })
  updateMany?: MedicationsUpdateManyWithWhereWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MedicationsScalarWhereInput[] | undefined;
}
