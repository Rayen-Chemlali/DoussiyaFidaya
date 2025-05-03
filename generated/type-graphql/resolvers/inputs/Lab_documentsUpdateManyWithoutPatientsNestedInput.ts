import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyPatientsInputEnvelope } from "../inputs/Lab_documentsCreateManyPatientsInputEnvelope";
import { Lab_documentsCreateOrConnectWithoutPatientsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutPatientsInput";
import { Lab_documentsCreateWithoutPatientsInput } from "../inputs/Lab_documentsCreateWithoutPatientsInput";
import { Lab_documentsScalarWhereInput } from "../inputs/Lab_documentsScalarWhereInput";
import { Lab_documentsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/Lab_documentsUpdateManyWithWhereWithoutPatientsInput";
import { Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput";
import { Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateManyWithoutPatientsNestedInput", {})
export class Lab_documentsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_documentsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  set?: Lab_documentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Lab_documentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  delete?: Lab_documentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: Lab_documentsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_documentsScalarWhereInput[] | undefined;
}
