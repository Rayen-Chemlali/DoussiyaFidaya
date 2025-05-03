import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutUsersInput } from "../inputs/DoctorsCreateOrConnectWithoutUsersInput";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutUsersInput", {})
export class DoctorsCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutUsersInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
