import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateManyUsersInputEnvelope } from "../inputs/PatientsCreateManyUsersInputEnvelope";
import { PatientsCreateOrConnectWithoutUsersInput } from "../inputs/PatientsCreateOrConnectWithoutUsersInput";
import { PatientsCreateWithoutUsersInput } from "../inputs/PatientsCreateWithoutUsersInput";
import { PatientsScalarWhereInput } from "../inputs/PatientsScalarWhereInput";
import { PatientsUpdateManyWithWhereWithoutUsersInput } from "../inputs/PatientsUpdateManyWithWhereWithoutUsersInput";
import { PatientsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/PatientsUpdateWithWhereUniqueWithoutUsersInput";
import { PatientsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/PatientsUpsertWithWhereUniqueWithoutUsersInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateManyWithoutUsersNestedInput", {})
export class PatientsUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [PatientsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: PatientsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: PatientsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: PatientsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereUniqueInput], {
    nullable: true
  })
  set?: PatientsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PatientsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereUniqueInput], {
    nullable: true
  })
  delete?: PatientsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: PatientsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: PatientsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PatientsScalarWhereInput[] | undefined;
}
