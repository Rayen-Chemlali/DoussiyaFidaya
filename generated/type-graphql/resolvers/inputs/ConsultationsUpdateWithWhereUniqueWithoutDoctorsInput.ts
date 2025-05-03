import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutDoctorsInput } from "../inputs/ConsultationsUpdateWithoutDoctorsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class ConsultationsUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutDoctorsInput;
}
