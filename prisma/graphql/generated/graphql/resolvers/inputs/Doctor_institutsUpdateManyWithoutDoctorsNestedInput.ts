import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyDoctorsInputEnvelope } from "../inputs/Doctor_institutsCreateManyDoctorsInputEnvelope";
import { Doctor_institutsCreateOrConnectWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateOrConnectWithoutDoctorsInput";
import { Doctor_institutsCreateWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateWithoutDoctorsInput";
import { Doctor_institutsScalarWhereInput } from "../inputs/Doctor_institutsScalarWhereInput";
import { Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput";
import { Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput";
import { Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateManyWithoutDoctorsNestedInput", {})
export class Doctor_institutsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Doctor_institutsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Doctor_institutsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Doctor_institutsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  set?: Doctor_institutsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Doctor_institutsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  delete?: Doctor_institutsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  connect?: Doctor_institutsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Doctor_institutsScalarWhereInput[] | undefined;
}
