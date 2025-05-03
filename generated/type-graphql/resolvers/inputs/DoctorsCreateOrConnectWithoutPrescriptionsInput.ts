import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutPrescriptionsInput } from "../inputs/DoctorsCreateWithoutPrescriptionsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutPrescriptionsInput", {})
export class DoctorsCreateOrConnectWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutPrescriptionsInput;
}
