import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyLaboratoriesInputEnvelope } from "../inputs/Lab_documentsCreateManyLaboratoriesInputEnvelope";
import { Lab_documentsCreateOrConnectWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateOrConnectWithoutLaboratoriesInput";
import { Lab_documentsCreateWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateWithoutLaboratoriesInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateNestedManyWithoutLaboratoriesInput", {})
export class Lab_documentsCreateNestedManyWithoutLaboratoriesInput {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateWithoutLaboratoriesInput], {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsCreateOrConnectWithoutLaboratoriesInput], {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutLaboratoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateManyLaboratoriesInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_documentsCreateManyLaboratoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput[] | undefined;
}
