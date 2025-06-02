import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutDoctorsInput } from "../inputs/UsersCreateOrConnectWithoutDoctorsInput";
import { UsersCreateWithoutDoctorsInput } from "../inputs/UsersCreateWithoutDoctorsInput";
import { UsersUpdateToOneWithWhereWithoutDoctorsInput } from "../inputs/UsersUpdateToOneWithWhereWithoutDoctorsInput";
import { UsersUpsertWithoutDoctorsInput } from "../inputs/UsersUpsertWithoutDoctorsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutDoctorsNestedInput", {})
export class UsersUpdateOneRequiredWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutDoctorsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutDoctorsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutDoctorsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateToOneWithWhereWithoutDoctorsInput, {
    nullable: true
  })
  update?: UsersUpdateToOneWithWhereWithoutDoctorsInput | undefined;
}
