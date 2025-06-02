import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyPatientsInputEnvelope } from "../inputs/Rdv_requestsCreateManyPatientsInputEnvelope";
import { Rdv_requestsCreateOrConnectWithoutPatientsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutPatientsInput";
import { Rdv_requestsCreateWithoutPatientsInput } from "../inputs/Rdv_requestsCreateWithoutPatientsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateNestedManyWithoutPatientsInput", {})
export class Rdv_requestsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Rdv_requestsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput[] | undefined;
}
