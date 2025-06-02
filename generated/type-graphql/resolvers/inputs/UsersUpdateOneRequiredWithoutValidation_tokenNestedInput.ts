import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutValidation_tokenInput } from "../inputs/UsersCreateOrConnectWithoutValidation_tokenInput";
import { UsersCreateWithoutValidation_tokenInput } from "../inputs/UsersCreateWithoutValidation_tokenInput";
import { UsersUpdateToOneWithWhereWithoutValidation_tokenInput } from "../inputs/UsersUpdateToOneWithWhereWithoutValidation_tokenInput";
import { UsersUpsertWithoutValidation_tokenInput } from "../inputs/UsersUpsertWithoutValidation_tokenInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutValidation_tokenNestedInput", {})
export class UsersUpdateOneRequiredWithoutValidation_tokenNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutValidation_tokenInput, {
    nullable: true
  })
  create?: UsersCreateWithoutValidation_tokenInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutValidation_tokenInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutValidation_tokenInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutValidation_tokenInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutValidation_tokenInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateToOneWithWhereWithoutValidation_tokenInput, {
    nullable: true
  })
  update?: UsersUpdateToOneWithWhereWithoutValidation_tokenInput | undefined;
}
