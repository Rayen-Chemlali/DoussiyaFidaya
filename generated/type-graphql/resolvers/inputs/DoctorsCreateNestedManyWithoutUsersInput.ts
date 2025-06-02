import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateManyUsersInputEnvelope } from "../inputs/DoctorsCreateManyUsersInputEnvelope";
import { DoctorsCreateOrConnectWithoutUsersInput } from "../inputs/DoctorsCreateOrConnectWithoutUsersInput";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedManyWithoutUsersInput", {})
export class DoctorsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: DoctorsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;
}
