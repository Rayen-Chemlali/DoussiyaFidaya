import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutLab_requestsInput } from "../inputs/Lab_documentsCreateWithoutLab_requestsInput";
import { Lab_documentsUpdateWithoutLab_requestsInput } from "../inputs/Lab_documentsUpdateWithoutLab_requestsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput", {})
export class Lab_documentsUpsertWithWhereUniqueWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutLab_requestsInput;
}
