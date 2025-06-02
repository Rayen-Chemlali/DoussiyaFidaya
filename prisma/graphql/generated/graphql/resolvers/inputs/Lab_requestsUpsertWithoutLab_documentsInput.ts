import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateWithoutLab_documentsInput";
import { Lab_requestsUpdateWithoutLab_documentsInput } from "../inputs/Lab_requestsUpdateWithoutLab_documentsInput";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";

@TypeGraphQL.InputType("Lab_requestsUpsertWithoutLab_documentsInput", {})
export class Lab_requestsUpsertWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: Lab_requestsUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;
}
