import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutUsersInput } from "../inputs/DoctorsCreateOrConnectWithoutUsersInput";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsUpdateToOneWithWhereWithoutUsersInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutUsersInput";
import { DoctorsUpsertWithoutUsersInput } from "../inputs/DoctorsUpsertWithoutUsersInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutUsersNestedInput", {})
export class DoctorsUpdateOneWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutUsersInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  disconnect?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  delete?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutUsersInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutUsersInput | undefined;
}
