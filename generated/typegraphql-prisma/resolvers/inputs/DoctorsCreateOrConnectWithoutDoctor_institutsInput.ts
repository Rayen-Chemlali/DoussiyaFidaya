import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateWithoutDoctor_institutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutDoctor_institutsInput", {})
export class DoctorsCreateOrConnectWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutDoctor_institutsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutDoctor_institutsInput;
}
