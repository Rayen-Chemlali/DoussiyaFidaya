import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateNestedManyWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateNestedManyWithoutLaboratoriesInput";

@TypeGraphQL.InputType("LaboratoriesCreateInput", {})
export class LaboratoriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedManyWithoutLaboratoriesInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsCreateNestedManyWithoutLaboratoriesInput | undefined;
}
