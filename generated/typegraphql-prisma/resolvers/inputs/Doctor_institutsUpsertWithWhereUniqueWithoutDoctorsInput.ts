import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateWithoutDoctorsInput";
import { Doctor_institutsUpdateWithoutDoctorsInput } from "../inputs/Doctor_institutsUpdateWithoutDoctorsInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class Doctor_institutsUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: Doctor_institutsUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Doctor_institutsCreateWithoutDoctorsInput;
}
