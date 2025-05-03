import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyDoctorsInputEnvelope } from "../inputs/Doctor_institutsCreateManyDoctorsInputEnvelope";
import { Doctor_institutsCreateOrConnectWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateOrConnectWithoutDoctorsInput";
import { Doctor_institutsCreateWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateWithoutDoctorsInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsCreateNestedManyWithoutDoctorsInput", {})
export class Doctor_institutsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Doctor_institutsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Doctor_institutsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Doctor_institutsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  connect?: Doctor_institutsWhereUniqueInput[] | undefined;
}
