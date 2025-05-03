import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCreateManyLab_documentsInputEnvelope } from "../inputs/Lab_attachmentsCreateManyLab_documentsInputEnvelope";
import { Lab_attachmentsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateOrConnectWithoutLab_documentsInput";
import { Lab_attachmentsCreateWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateWithoutLab_documentsInput";
import { Lab_attachmentsWhereUniqueInput } from "../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_attachmentsCreateNestedManyWithoutLab_documentsInput", {})
export class Lab_attachmentsCreateNestedManyWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Lab_attachmentsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_attachmentsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_attachmentsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_attachmentsWhereUniqueInput[] | undefined;
}
