import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyLaboratoriesInputEnvelope } from "../inputs/Lab_documentsCreateManyLaboratoriesInputEnvelope";
import { Lab_documentsCreateOrConnectWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateOrConnectWithoutLaboratoriesInput";
import { Lab_documentsCreateWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateWithoutLaboratoriesInput";
import { Lab_documentsScalarWhereInput } from "../inputs/Lab_documentsScalarWhereInput";
import { Lab_documentsUpdateManyWithWhereWithoutLaboratoriesInput } from "../inputs/Lab_documentsUpdateManyWithWhereWithoutLaboratoriesInput";
import { Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput } from "../inputs/Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput";
import { Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput } from "../inputs/Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateManyWithoutLaboratoriesNestedInput", {})
export class Lab_documentsUpdateManyWithoutLaboratoriesNestedInput {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateWithoutLaboratoriesInput], {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsCreateOrConnectWithoutLaboratoriesInput], {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput], {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateManyLaboratoriesInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_documentsCreateManyLaboratoriesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput], {
    nullable: true
  })
  update?: Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateManyWithWhereWithoutLaboratoriesInput], {
    nullable: true
  })
  updateMany?: Lab_documentsUpdateManyWithWhereWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_documentsScalarWhereInput[] | undefined;
}
