import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutUsersInput } from "../inputs/DoctorsUpdateWithoutUsersInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutUsersInput", {})
export class DoctorsUpdateToOneWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutUsersInput;
}
