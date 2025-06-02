import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyDoctorsInputEnvelope } from "../inputs/RdvsCreateManyDoctorsInputEnvelope";
import { RdvsCreateOrConnectWithoutDoctorsInput } from "../inputs/RdvsCreateOrConnectWithoutDoctorsInput";
import { RdvsCreateWithoutDoctorsInput } from "../inputs/RdvsCreateWithoutDoctorsInput";
import { RdvsScalarWhereInput } from "../inputs/RdvsScalarWhereInput";
import { RdvsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/RdvsUpdateManyWithWhereWithoutDoctorsInput";
import { RdvsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/RdvsUpdateWithWhereUniqueWithoutDoctorsInput";
import { RdvsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/RdvsUpsertWithWhereUniqueWithoutDoctorsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateManyWithoutDoctorsNestedInput", {})
export class RdvsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [RdvsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: RdvsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: RdvsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: RdvsCreateManyDoctorsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RdvsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: RdvsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: RdvsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RdvsScalarWhereInput[] | undefined;
}
