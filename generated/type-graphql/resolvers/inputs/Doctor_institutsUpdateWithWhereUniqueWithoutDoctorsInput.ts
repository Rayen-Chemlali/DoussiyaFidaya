import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsUpdateWithoutDoctorsInput } from "../inputs/Doctor_institutsUpdateWithoutDoctorsInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class Doctor_institutsUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: Doctor_institutsUpdateWithoutDoctorsInput;
}
