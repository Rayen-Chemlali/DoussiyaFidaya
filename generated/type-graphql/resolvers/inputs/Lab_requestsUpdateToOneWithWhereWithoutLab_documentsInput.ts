import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsUpdateWithoutLab_documentsInput } from "../inputs/Lab_requestsUpdateWithoutLab_documentsInput";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";

@TypeGraphQL.InputType("Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput", {})
export class Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateWithoutLab_documentsInput;
}
