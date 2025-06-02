import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsScalarWhereInput } from "../inputs/Doctor_institutsScalarWhereInput";
import { Doctor_institutsUpdateManyMutationInput } from "../inputs/Doctor_institutsUpdateManyMutationInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput", {})
export class Doctor_institutsUpdateManyWithWhereWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Doctor_institutsScalarWhereInput, {
    nullable: false
  })
  where!: Doctor_institutsScalarWhereInput;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Doctor_institutsUpdateManyMutationInput;
}
