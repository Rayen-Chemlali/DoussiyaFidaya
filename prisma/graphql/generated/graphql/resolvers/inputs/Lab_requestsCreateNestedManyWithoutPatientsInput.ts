import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyPatientsInputEnvelope } from "../inputs/Lab_requestsCreateManyPatientsInputEnvelope";
import { Lab_requestsCreateOrConnectWithoutPatientsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutPatientsInput";
import { Lab_requestsCreateWithoutPatientsInput } from "../inputs/Lab_requestsCreateWithoutPatientsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateNestedManyWithoutPatientsInput", {})
export class Lab_requestsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_requestsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput[] | undefined;
}
