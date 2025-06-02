import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateNestedOneWithoutLab_attachmentsInput } from "../inputs/Lab_documentsCreateNestedOneWithoutLab_attachmentsInput";

@TypeGraphQL.InputType("Lab_attachmentsCreateInput", {})
export class Lab_attachmentsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedOneWithoutLab_attachmentsInput, {
    nullable: false
  })
  lab_documents!: Lab_documentsCreateNestedOneWithoutLab_attachmentsInput;
}
