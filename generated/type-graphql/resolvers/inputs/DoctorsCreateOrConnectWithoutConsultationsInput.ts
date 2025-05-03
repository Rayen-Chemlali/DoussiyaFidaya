import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutConsultationsInput } from "../inputs/DoctorsCreateWithoutConsultationsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutConsultationsInput", {})
export class DoctorsCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutConsultationsInput;
}
