import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutLab_documentsInput";
import { Lab_requestsCreateWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateWithoutLab_documentsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateNestedOneWithoutLab_documentsInput", {})
export class Lab_requestsCreateNestedOneWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutLab_documentsInput, {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateOrConnectWithoutLab_documentsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput | undefined;
}
