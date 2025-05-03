import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutDoctorsInput } from "../inputs/ConsultationsCreateWithoutDoctorsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutDoctorsInput", {})
export class ConsultationsCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutDoctorsInput;
}
