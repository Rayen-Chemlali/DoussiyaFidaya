import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutRdvsInput } from "../inputs/DoctorsCreateOrConnectWithoutRdvsInput";
import { DoctorsCreateWithoutRdvsInput } from "../inputs/DoctorsCreateWithoutRdvsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutRdvsInput", {})
export class DoctorsCreateNestedOneWithoutRdvsInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
