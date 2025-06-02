import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutLab_requestsInput } from "../inputs/Lab_documentsUpdateWithoutLab_requestsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput", {})
export class Lab_documentsUpdateWithWhereUniqueWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutLab_requestsInput;
}
