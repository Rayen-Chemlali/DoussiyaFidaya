import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyDoctorsInputEnvelope } from "../inputs/ConsultationsCreateManyDoctorsInputEnvelope";
import { ConsultationsCreateOrConnectWithoutDoctorsInput } from "../inputs/ConsultationsCreateOrConnectWithoutDoctorsInput";
import { ConsultationsCreateWithoutDoctorsInput } from "../inputs/ConsultationsCreateWithoutDoctorsInput";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/ConsultationsUpdateManyWithWhereWithoutDoctorsInput";
import { ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput";
import { ConsultationsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/ConsultationsUpsertWithWhereUniqueWithoutDoctorsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithoutDoctorsNestedInput", {})
export class ConsultationsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyDoctorsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: ConsultationsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationsScalarWhereInput[] | undefined;
}
