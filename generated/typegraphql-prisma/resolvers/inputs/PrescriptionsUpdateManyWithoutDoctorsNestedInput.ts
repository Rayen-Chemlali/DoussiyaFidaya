import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyDoctorsInputEnvelope } from "../inputs/PrescriptionsCreateManyDoctorsInputEnvelope";
import { PrescriptionsCreateOrConnectWithoutDoctorsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutDoctorsInput";
import { PrescriptionsCreateWithoutDoctorsInput } from "../inputs/PrescriptionsCreateWithoutDoctorsInput";
import { PrescriptionsScalarWhereInput } from "../inputs/PrescriptionsScalarWhereInput";
import { PrescriptionsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/PrescriptionsUpdateManyWithWhereWithoutDoctorsInput";
import { PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput";
import { PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateManyWithoutDoctorsNestedInput", {})
export class PrescriptionsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: PrescriptionsCreateManyDoctorsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: PrescriptionsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: PrescriptionsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PrescriptionsScalarWhereInput[] | undefined;
}
