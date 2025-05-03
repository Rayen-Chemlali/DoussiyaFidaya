import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyPatientsInputEnvelope } from "../inputs/Lab_documentsCreateManyPatientsInputEnvelope";
import { Lab_documentsCreateOrConnectWithoutPatientsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutPatientsInput";
import { Lab_documentsCreateWithoutPatientsInput } from "../inputs/Lab_documentsCreateWithoutPatientsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateNestedManyWithoutPatientsInput", {})
export class Lab_documentsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_documentsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput[] | undefined;
}
