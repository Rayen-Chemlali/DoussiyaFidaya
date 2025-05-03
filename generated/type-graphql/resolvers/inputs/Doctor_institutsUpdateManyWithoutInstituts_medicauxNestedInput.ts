import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/Doctor_institutsCreateManyInstituts_medicauxInputEnvelope";
import { Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput";
import { Doctor_institutsCreateWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateWithoutInstituts_medicauxInput";
import { Doctor_institutsScalarWhereInput } from "../inputs/Doctor_institutsScalarWhereInput";
import { Doctor_institutsUpdateManyWithWhereWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsUpdateManyWithWhereWithoutInstituts_medicauxInput";
import { Doctor_institutsUpdateWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsUpdateWithWhereUniqueWithoutInstituts_medicauxInput";
import { Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput", {})
export class Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: Doctor_institutsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  upsert?: Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: Doctor_institutsCreateManyInstituts_medicauxInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Doctor_institutsUpdateWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  update?: Doctor_institutsUpdateWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsUpdateManyWithWhereWithoutInstituts_medicauxInput], {
    nullable: true
  })
  updateMany?: Doctor_institutsUpdateManyWithWhereWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Doctor_institutsScalarWhereInput[] | undefined;
}
