import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateOrConnectWithoutConsultationsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutConsultationsInput";
import { Lab_requestsCreateWithoutConsultationsInput } from "../inputs/Lab_requestsCreateWithoutConsultationsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateNestedManyWithoutConsultationsInput", {})
export class Lab_requestsCreateNestedManyWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutConsultationsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutConsultationsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput[] | undefined;
}
