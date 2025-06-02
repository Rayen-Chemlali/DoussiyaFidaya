import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyDoctorsInput } from "../inputs/Doctor_institutsCreateManyDoctorsInput";

@TypeGraphQL.InputType("Doctor_institutsCreateManyDoctorsInputEnvelope", {})
export class Doctor_institutsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: Doctor_institutsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
