import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyPrescriptionsInputEnvelope } from "../inputs/ConsultationsCreateManyPrescriptionsInputEnvelope";
import { ConsultationsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateOrConnectWithoutPrescriptionsInput";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyWithWhereWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateManyWithWhereWithoutPrescriptionsInput";
import { ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput";
import { ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput } from "../inputs/ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithoutPrescriptionsNestedInput", {})
export class ConsultationsUpdateManyWithoutPrescriptionsNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutPrescriptionsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutPrescriptionsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput], {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyPrescriptionsInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyPrescriptionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  set?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  delete?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput], {
    nullable: true
  })
  update?: ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateManyWithWhereWithoutPrescriptionsInput], {
    nullable: true
  })
  updateMany?: ConsultationsUpdateManyWithWhereWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationsScalarWhereInput[] | undefined;
}
