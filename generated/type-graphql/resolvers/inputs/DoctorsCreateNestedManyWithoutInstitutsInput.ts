import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutInstitutsInput } from "../inputs/DoctorsCreateOrConnectWithoutInstitutsInput";
import { DoctorsCreateWithoutInstitutsInput } from "../inputs/DoctorsCreateWithoutInstitutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedManyWithoutInstitutsInput", {})
export class DoctorsCreateNestedManyWithoutInstitutsInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutInstitutsInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutInstitutsInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;
}
