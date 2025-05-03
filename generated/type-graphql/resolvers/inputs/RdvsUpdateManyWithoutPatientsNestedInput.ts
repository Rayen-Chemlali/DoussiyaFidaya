import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyPatientsInputEnvelope } from "../inputs/RdvsCreateManyPatientsInputEnvelope";
import { RdvsCreateOrConnectWithoutPatientsInput } from "../inputs/RdvsCreateOrConnectWithoutPatientsInput";
import { RdvsCreateWithoutPatientsInput } from "../inputs/RdvsCreateWithoutPatientsInput";
import { RdvsScalarWhereInput } from "../inputs/RdvsScalarWhereInput";
import { RdvsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/RdvsUpdateManyWithWhereWithoutPatientsInput";
import { RdvsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/RdvsUpdateWithWhereUniqueWithoutPatientsInput";
import { RdvsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/RdvsUpsertWithWhereUniqueWithoutPatientsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateManyWithoutPatientsNestedInput", {})
export class RdvsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [RdvsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: RdvsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: RdvsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: RdvsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  set?: RdvsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RdvsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  delete?: RdvsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: RdvsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: RdvsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RdvsScalarWhereInput[] | undefined;
}
