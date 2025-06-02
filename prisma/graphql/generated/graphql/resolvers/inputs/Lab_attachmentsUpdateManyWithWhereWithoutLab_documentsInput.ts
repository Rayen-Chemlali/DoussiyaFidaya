import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsScalarWhereInput } from "../inputs/Lab_attachmentsScalarWhereInput";
import { Lab_attachmentsUpdateManyMutationInput } from "../inputs/Lab_attachmentsUpdateManyMutationInput";

@TypeGraphQL.InputType("Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput", {})
export class Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_attachmentsScalarWhereInput, {
    nullable: false
  })
  where!: Lab_attachmentsScalarWhereInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_attachmentsUpdateManyMutationInput;
}
