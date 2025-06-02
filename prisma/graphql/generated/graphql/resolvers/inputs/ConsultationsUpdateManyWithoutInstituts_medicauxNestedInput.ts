import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/ConsultationsCreateManyInstituts_medicauxInputEnvelope";
import { ConsultationsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateOrConnectWithoutInstituts_medicauxInput";
import { ConsultationsCreateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateWithoutInstituts_medicauxInput";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput } from "../inputs/ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput";
import { ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput";
import { ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput", {})
export class ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyInstituts_medicauxInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  update?: ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput], {
    nullable: true
  })
  updateMany?: ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationsScalarWhereInput[] | undefined;
}
