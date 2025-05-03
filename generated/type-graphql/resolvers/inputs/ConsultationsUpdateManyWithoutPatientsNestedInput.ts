import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyPatientsInputEnvelope } from "../inputs/ConsultationsCreateManyPatientsInputEnvelope";
import { ConsultationsCreateOrConnectWithoutPatientsInput } from "../inputs/ConsultationsCreateOrConnectWithoutPatientsInput";
import { ConsultationsCreateWithoutPatientsInput } from "../inputs/ConsultationsCreateWithoutPatientsInput";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/ConsultationsUpdateManyWithWhereWithoutPatientsInput";
import { ConsultationsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/ConsultationsUpdateWithWhereUniqueWithoutPatientsInput";
import { ConsultationsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/ConsultationsUpsertWithWhereUniqueWithoutPatientsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithoutPatientsNestedInput", {})
export class ConsultationsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyPatientsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ConsultationsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: ConsultationsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: ConsultationsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationsScalarWhereInput[] | undefined;
}
