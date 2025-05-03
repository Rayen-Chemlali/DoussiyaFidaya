import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyDoctorsInputEnvelope } from "../inputs/Lab_requestsCreateManyDoctorsInputEnvelope";
import { Lab_requestsCreateOrConnectWithoutDoctorsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutDoctorsInput";
import { Lab_requestsCreateWithoutDoctorsInput } from "../inputs/Lab_requestsCreateWithoutDoctorsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateNestedManyWithoutDoctorsInput", {})
export class Lab_requestsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_requestsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput[] | undefined;
}
