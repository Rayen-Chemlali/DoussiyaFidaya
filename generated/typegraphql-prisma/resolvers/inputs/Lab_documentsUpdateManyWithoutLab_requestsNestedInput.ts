import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyLab_requestsInputEnvelope } from "../inputs/Lab_documentsCreateManyLab_requestsInputEnvelope";
import { Lab_documentsCreateOrConnectWithoutLab_requestsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutLab_requestsInput";
import { Lab_documentsCreateWithoutLab_requestsInput } from "../inputs/Lab_documentsCreateWithoutLab_requestsInput";
import { Lab_documentsScalarWhereInput } from "../inputs/Lab_documentsScalarWhereInput";
import { Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput } from "../inputs/Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput";
import { Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput } from "../inputs/Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput";
import { Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput } from "../inputs/Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateManyWithoutLab_requestsNestedInput", {})
export class Lab_documentsUpdateManyWithoutLab_requestsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateWithoutLab_requestsInput], {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsCreateOrConnectWithoutLab_requestsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput], {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateManyLab_requestsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_documentsCreateManyLab_requestsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput], {
    nullable: true
  })
  update?: Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput], {
    nullable: true
  })
  updateMany?: Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_documentsScalarWhereInput[] | undefined;
}
