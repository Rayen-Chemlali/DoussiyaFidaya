import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyDoctorsInputEnvelope } from "../inputs/Rdv_requestsCreateManyDoctorsInputEnvelope";
import { Rdv_requestsCreateOrConnectWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutDoctorsInput";
import { Rdv_requestsCreateWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateWithoutDoctorsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateNestedManyWithoutDoctorsInput", {})
export class Rdv_requestsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Rdv_requestsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput[] | undefined;
}
