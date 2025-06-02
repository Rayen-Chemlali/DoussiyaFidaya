import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateManyUsersInputEnvelope } from "../inputs/DoctorsCreateManyUsersInputEnvelope";
import { DoctorsCreateOrConnectWithoutUsersInput } from "../inputs/DoctorsCreateOrConnectWithoutUsersInput";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsScalarWhereInput } from "../inputs/DoctorsScalarWhereInput";
import { DoctorsUpdateManyWithWhereWithoutUsersInput } from "../inputs/DoctorsUpdateManyWithWhereWithoutUsersInput";
import { DoctorsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/DoctorsUpdateWithWhereUniqueWithoutUsersInput";
import { DoctorsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/DoctorsUpsertWithWhereUniqueWithoutUsersInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateManyWithoutUsersNestedInput", {})
export class DoctorsUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: DoctorsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: DoctorsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  set?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  delete?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: DoctorsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: DoctorsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DoctorsScalarWhereInput[] | undefined;
}
