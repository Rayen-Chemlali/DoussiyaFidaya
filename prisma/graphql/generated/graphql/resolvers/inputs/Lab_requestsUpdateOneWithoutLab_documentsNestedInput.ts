import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutLab_documentsInput";
import { Lab_requestsCreateWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateWithoutLab_documentsInput";
import { Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput } from "../inputs/Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput";
import { Lab_requestsUpsertWithoutLab_documentsInput } from "../inputs/Lab_requestsUpsertWithoutLab_documentsInput";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateOneWithoutLab_documentsNestedInput", {})
export class Lab_requestsUpdateOneWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutLab_documentsInput, {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateOrConnectWithoutLab_documentsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpsertWithoutLab_documentsInput, {
    nullable: true
  })
  upsert?: Lab_requestsUpsertWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  disconnect?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  delete?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput, {
    nullable: true
  })
  update?: Lab_requestsUpdateToOneWithWhereWithoutLab_documentsInput | undefined;
}
