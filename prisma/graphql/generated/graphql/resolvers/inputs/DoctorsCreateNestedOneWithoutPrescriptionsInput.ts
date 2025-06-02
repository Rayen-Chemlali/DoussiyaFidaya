import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/DoctorsCreateOrConnectWithoutPrescriptionsInput";
import { DoctorsCreateWithoutPrescriptionsInput } from "../inputs/DoctorsCreateWithoutPrescriptionsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutPrescriptionsInput", {})
export class DoctorsCreateNestedOneWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
